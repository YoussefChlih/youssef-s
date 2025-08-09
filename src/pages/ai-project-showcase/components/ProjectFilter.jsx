import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectFilter = ({ 
  activeCategory, 
  onCategoryChange, 
  activeTech, 
  onTechChange, 
  activeIndustry, 
  onIndustryChange,
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange
}) => {
  const categories = [
    { id: 'all', label: 'All Projects', icon: 'Grid3X3' },
    { id: 'ml', label: 'Machine Learning', icon: 'Brain' },
    { id: 'nlp', label: 'NLP', icon: 'MessageSquare' },
    { id: 'cv', label: 'Computer Vision', icon: 'Eye' },
    { id: 'mlops', label: 'MLOps', icon: 'Settings' }
  ];

  const techStacks = [
    'TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'Transformers', 
    'FastAPI', 'Docker', 'AWS', 'React', 'Python'
  ];

  const industries = [
    'Healthcare', 'Finance', 'E-commerce', 'Social Impact', 'Education', 'Manufacturing'
  ];

  const sortOptions = [
    { value: 'recent', label: 'Most Recent' },
    { value: 'popular', label: 'Most Popular' },
    { value: 'impact', label: 'Highest Impact' },
    { value: 'complexity', label: 'Most Complex' }
  ];

  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-intelligent">
      {/* Search */}
      <div className="mb-6">
        <div className="relative">
          <Icon 
            name="Search" 
            size={20} 
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" 
          />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e?.target?.value)}
            className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-intelligent"
          />
        </div>
      </div>
      {/* Categories */}
      <div className="mb-6">
        <h3 className="font-subheading text-sm text-foreground mb-3">Category</h3>
        <div className="flex flex-wrap gap-2">
          {categories?.map((category) => (
            <Button
              key={category?.id}
              variant={activeCategory === category?.id ? "default" : "outline"}
              size="sm"
              iconName={category?.icon}
              iconPosition="left"
              onClick={() => onCategoryChange(category?.id)}
              className="font-cta"
            >
              {category?.label}
            </Button>
          ))}
        </div>
      </div>
      {/* Tech Stack */}
      <div className="mb-6">
        <h3 className="font-subheading text-sm text-foreground mb-3">Technology</h3>
        <div className="flex flex-wrap gap-2">
          {techStacks?.map((tech) => (
            <button
              key={tech}
              onClick={() => onTechChange(tech)}
              className={`px-3 py-1.5 rounded-md text-xs font-cta transition-intelligent ${
                activeTech === tech
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {tech}
            </button>
          ))}
        </div>
      </div>
      {/* Industry */}
      <div className="mb-6">
        <h3 className="font-subheading text-sm text-foreground mb-3">Industry</h3>
        <div className="flex flex-wrap gap-2">
          {industries?.map((industry) => (
            <button
              key={industry}
              onClick={() => onIndustryChange(industry)}
              className={`px-3 py-1.5 rounded-md text-xs font-cta transition-intelligent ${
                activeIndustry === industry
                  ? 'bg-secondary text-secondary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {industry}
            </button>
          ))}
        </div>
      </div>
      {/* Sort */}
      <div>
        <h3 className="font-subheading text-sm text-foreground mb-3">Sort By</h3>
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e?.target?.value)}
          className="w-full px-3 py-2 bg-background border border-border rounded-lg font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-intelligent"
        >
          {sortOptions?.map((option) => (
            <option key={option?.value} value={option?.value}>
              {option?.label}
            </option>
          ))}
        </select>
      </div>
      {/* Clear Filters */}
      <div className="mt-6 pt-6 border-t border-border">
        <Button
          variant="ghost"
          size="sm"
          iconName="X"
          iconPosition="left"
          onClick={() => {
            onCategoryChange('all');
            onTechChange('');
            onIndustryChange('');
            onSearchChange('');
            onSortChange('recent');
          }}
          className="w-full font-cta"
        >
          Clear All Filters
        </Button>
      </div>
    </div>
  );
};

export default ProjectFilter;