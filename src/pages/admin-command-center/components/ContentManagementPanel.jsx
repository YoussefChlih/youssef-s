import React, { useState, useEffect, useCallback } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import { db } from '../../../utils/firebase';
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
  serverTimestamp,
  query,
  orderBy
} from 'firebase/firestore';

// Firestore collection IDs mapping per tab
const COLLECTION_MAP = {
  projects: 'projects',
  blog: 'blogPosts',
  skills: 'skills',
  experience: 'experiences'
};

const DEFAULT_STATUS_OPTIONS = {
  projects: ['Draft', 'Published'],
  blog: ['Draft', 'Published'],
  skills: ['Learning', 'Intermediate', 'Expert'],
  experience: ['Past', 'Current']
};

const getStatusColor = (status = '') => {
  const s = status.toLowerCase();
  if (['published', 'current', 'expert'].includes(s)) return 'bg-success/10 text-success border-success/20';
  if (['draft', 'learning'].includes(s)) return 'bg-warning/10 text-warning border-warning/20';
  return 'bg-muted text-muted-foreground border-border';
};

const ContentManagementPanel = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const [items, setItems] = useState([]); // current tab content
  const [counts, setCounts] = useState({ projects: 0, blog: 0, skills: 0, experience: 0 });
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({ title: '', status: '' });
  const [error, setError] = useState('');

  // Sections meta
  const contentSections = [
    { id: 'projects', label: 'Projects', icon: 'Briefcase' },
    { id: 'blog', label: 'Blog Posts', icon: 'FileText' },
    { id: 'skills', label: 'Skills', icon: 'Code' },
    { id: 'experience', label: 'Experience', icon: 'Clock' }
  ];

  // Subscribe to counts for all collections (lightweight)
  useEffect(() => {
    const unsubs = Object.entries(COLLECTION_MAP).map(([key, colName]) =>
      onSnapshot(collection(db, colName), snap => {
        setCounts(prev => ({ ...prev, [key]: snap.size }));
      })
    );
    return () => unsubs.forEach(u => u && u());
  }, []);

  // Load active tab items in real-time
  useEffect(() => {
    setLoading(true);
    const colName = COLLECTION_MAP[activeTab];
    if (!colName) return;
    const q = query(collection(db, colName), orderBy('lastModified', 'desc'));
    const unsub = onSnapshot(q, (snap) => {
      const rows = [];
      snap.forEach(d => rows.push({ id: d.id, ...d.data() }));
      setItems(rows);
      setLoading(false);
    }, (e) => {
      // eslint-disable-next-line no-console
      console.error('Load error', e);
      setError('Failed to load data');
      setLoading(false);
    });
    return () => unsub();
  }, [activeTab]);

  const openNew = () => {
    setEditingItem(null);
    setFormData({ title: '', status: DEFAULT_STATUS_OPTIONS[activeTab]?.[0] || '' });
    setShowForm(true);
    setError('');
  };

  const openEdit = (item) => {
    setEditingItem(item);
    setFormData({ title: item.title || '', status: item.status || '' });
    setShowForm(true);
    setError('');
  };

  const handleDelete = async (item) => {
    if (!window.confirm('Delete this item?')) return;
    try {
      await deleteDoc(doc(db, COLLECTION_MAP[activeTab], item.id));
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
      setError('Delete failed');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const colName = COLLECTION_MAP[activeTab];
      if (!formData.title.trim()) throw new Error('Title required');
      if (editingItem) {
        await updateDoc(doc(db, colName, editingItem.id), {
          title: formData.title.trim(),
            status: formData.status,
            lastModified: serverTimestamp()
        });
      } else {
        await addDoc(collection(db, colName), {
          title: formData.title.trim(),
          status: formData.status,
          views: 0,
          lastModified: serverTimestamp()
        });
      }
      setShowForm(false);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
      setError(e.message || 'Save failed');
    }
  };

  const statusOptions = DEFAULT_STATUS_OPTIONS[activeTab] || [];

  return (
    <div className="bg-card border border-border rounded-lg shadow-intelligent relative">
      <div className="p-6 border-b border-border">
        <h3 className="text-lg font-subheading text-foreground mb-4">Content Management</h3>
        <div className="flex space-x-1 bg-muted p-1 rounded-lg overflow-x-auto">
          {contentSections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveTab(section.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md font-cta text-sm transition-intelligent ${
                activeTab === section.id
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon name={section.icon} size={16} />
              <span>{section.label}</span>
              <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-xs">
                {counts[section.id] || 0}
              </span>
            </button>
          ))}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-subheading text-foreground">
            {contentSections.find(s => s.id === activeTab)?.label}
          </h4>
          <Button variant="default" size="sm" iconName="Plus" iconPosition="left" onClick={openNew}>
            Add New
          </Button>
        </div>

        {loading && (
          <div className="text-sm text-muted-foreground font-body mb-3">Loading...</div>
        )}
        {error && (
          <div className="mb-3 bg-destructive/10 border border-destructive/30 text-destructive text-xs rounded p-2 font-body">
            {error}
          </div>
        )}

        <div className="space-y-3">
          {(!items || items.length === 0) && !loading && (
            <div className="p-6 bg-muted/40 rounded-lg text-center text-sm text-muted-foreground font-body">
              No content yet. Click Add New to create the first item.
            </div>
          )}
          {items.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg hover:bg-muted transition-intelligent">
              <div className="flex-1 min-w-0">
                <h5 className="font-body-semibold text-foreground mb-1 truncate" title={item.title}>{item.title}</h5>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground font-body">
                  <span>
                    Modified: {item.lastModified?.toDate ? item.lastModified.toDate().toLocaleDateString() : '—'}
                  </span>
                  <span>Views: {(item.views || 0).toLocaleString()}</span>
                  {item.createdAt?.toDate && (
                    <span>Created: {item.createdAt.toDate().toLocaleDateString()}</span>
                  )}
                </div>
              </div>
              <div className="flex items-center space-x-3 pl-4">
                <span className={`px-3 py-1 rounded-full text-xs font-cta border ${getStatusColor(item.status)}`}>{item.status || '—'}</span>
                <div className="flex items-center space-x-1">
                  <Button variant="ghost" size="sm" iconName="Edit" onClick={() => openEdit(item)} />
                  <Button variant="ghost" size="sm" iconName="Trash2" onClick={() => handleDelete(item)} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showForm && (
        <div className="fixed inset-0 z-40 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setShowForm(false)} />
          <div className="relative bg-card border border-border rounded-xl shadow-intelligent-hover w-full max-w-md p-6 space-y-4 z-10">
            <div className="flex items-center justify-between">
              <h4 className="font-headline text-lg text-foreground">{editingItem ? 'Edit' : 'Add'} {contentSections.find(s => s.id === activeTab)?.label.slice(0, -1)}</h4>
              <Button variant="ghost" size="sm" iconName="X" onClick={() => setShowForm(false)} />
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-cta text-muted-foreground mb-1">Title</label>
                <Input
                  value={formData.title}
                  onChange={e => setFormData(fd => ({ ...fd, title: e.target.value }))}
                  required
                  placeholder="Enter title"
                />
              </div>
              {statusOptions.length > 0 && (
                <div>
                  <label className="block text-xs font-cta text-muted-foreground mb-1">Status</label>
                  <select
                    className="w-full bg-background border border-border rounded-md px-3 py-2 text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/40"
                    value={formData.status}
                    onChange={e => setFormData(fd => ({ ...fd, status: e.target.value }))}
                  >
                    {statusOptions.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              )}
              {error && <div className="text-destructive text-xs font-body">{error}</div>}
              <div className="flex items-center justify-end space-x-3 pt-2">
                <Button type="button" variant="outline" size="sm" onClick={() => setShowForm(false)}>Cancel</Button>
                <Button type="submit" variant="default" size="sm" iconName={editingItem ? 'Save' : 'Plus'} iconPosition="left">
                  {editingItem ? 'Save Changes' : 'Create'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentManagementPanel;