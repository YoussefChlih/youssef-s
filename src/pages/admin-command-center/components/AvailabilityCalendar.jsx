import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const AvailabilityCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const appointments = [
    {
      id: 1,
      title: "AI Consulting Call",
      client: "TechCorp Solutions",
      date: new Date(2025, 0, 31, 14, 0),
      duration: 60,
      type: "consultation",
      status: "confirmed"
    },
    {
      id: 2,
      title: "Project Review Meeting",
      client: "StartupXYZ",
      date: new Date(2025, 1, 2, 10, 30),
      duration: 90,
      type: "meeting",
      status: "pending"
    },
    {
      id: 3,
      title: "Technical Interview",
      client: "Global Tech Inc",
      date: new Date(2025, 1, 3, 16, 0),
      duration: 45,
      type: "interview",
      status: "confirmed"
    },
    {
      id: 4,
      title: "Speaking Engagement",
      client: "AI Conference Morocco",
      date: new Date(2025, 1, 5, 9, 0),
      duration: 120,
      type: "speaking",
      status: "confirmed"
    }
  ];

  const availabilitySlots = [
    { time: "09:00", available: true },
    { time: "10:00", available: false },
    { time: "11:00", available: true },
    { time: "14:00", available: false },
    { time: "15:00", available: true },
    { time: "16:00", available: false },
    { time: "17:00", available: true }
  ];

  const getDaysInMonth = (date) => {
    const year = date?.getFullYear();
    const month = date?.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay?.getDate();
    const startingDayOfWeek = firstDay?.getDay();

    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days?.push(null);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days?.push(new Date(year, month, day));
    }
    
    return days;
  };

  const getAppointmentsForDate = (date) => {
    if (!date) return [];
    return appointments?.filter(apt => 
      apt?.date?.toDateString() === date?.toDateString()
    );
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'consultation':
        return 'bg-primary/10 text-primary border-primary/20';
      case 'meeting':
        return 'bg-secondary/10 text-secondary border-secondary/20';
      case 'interview':
        return 'bg-accent/10 text-accent border-accent/20';
      case 'speaking':
        return 'bg-success/10 text-success border-success/20';
      default:
        return 'bg-muted text-muted-foreground border-border';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed':
        return 'bg-success/10 text-success border-success/20';
      case 'pending':
        return 'bg-warning/10 text-warning border-warning/20';
      case 'cancelled':
        return 'bg-error/10 text-error border-error/20';
      default:
        return 'bg-muted text-muted-foreground border-border';
    }
  };

  const formatTime = (date) => {
    return date?.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
  };

  const formatDate = (date) => {
    return date?.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const navigateMonth = (direction) => {
    const newDate = new Date(currentDate);
    newDate?.setMonth(currentDate?.getMonth() + direction);
    setCurrentDate(newDate);
  };

  const isToday = (date) => {
    if (!date) return false;
    const today = new Date();
    return date?.toDateString() === today?.toDateString();
  };

  const hasAppointments = (date) => {
    if (!date) return false;
    return getAppointmentsForDate(date)?.length > 0;
  };

  const days = getDaysInMonth(currentDate);
  const monthYear = currentDate?.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  return (
    <div className="bg-card border border-border rounded-lg shadow-intelligent">
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-subheading text-foreground">Availability Calendar</h3>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" iconName="Calendar" iconPosition="left">
              Add Slot
            </Button>
            <Button variant="outline" size="sm" iconName="Settings">
              Settings
            </Button>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Calendar */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-subheading text-foreground">{monthYear}</h4>
              <div className="flex items-center space-x-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  iconName="ChevronLeft"
                  onClick={() => navigateMonth(-1)}
                />
                <Button 
                  variant="outline" 
                  size="sm" 
                  iconName="ChevronRight"
                  onClick={() => navigateMonth(1)}
                />
              </div>
            </div>

            <div className="grid grid-cols-7 gap-1 mb-2">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']?.map(day => (
                <div key={day} className="p-2 text-center text-sm font-cta text-muted-foreground">
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1">
              {days?.map((date, index) => (
                <button
                  key={index}
                  onClick={() => date && setSelectedDate(date)}
                  className={`p-2 text-sm font-body rounded-lg transition-intelligent relative ${
                    !date 
                      ? 'invisible' 
                      : isToday(date)
                        ? 'bg-primary text-primary-foreground'
                        : selectedDate && date?.toDateString() === selectedDate?.toDateString()
                          ? 'bg-secondary text-secondary-foreground'
                          : hasAppointments(date)
                            ? 'bg-accent/10 text-accent hover:bg-accent/20' :'text-foreground hover:bg-muted'
                  }`}
                  disabled={!date}
                >
                  {date && date?.getDate()}
                  {date && hasAppointments(date) && (
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-current rounded-full"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Appointments & Availability */}
          <div className="space-y-6">
            {/* Selected Date Info */}
            {selectedDate && (
              <div>
                <h4 className="font-subheading text-foreground mb-3">
                  {formatDate(selectedDate)}
                </h4>
                
                <div className="space-y-3">
                  {getAppointmentsForDate(selectedDate)?.length > 0 ? (
                    getAppointmentsForDate(selectedDate)?.map((appointment) => (
                      <div key={appointment?.id} className="p-3 bg-muted/50 rounded-lg">
                        <div className="flex items-start justify-between mb-2">
                          <h5 className="font-body-semibold text-foreground text-sm">
                            {appointment?.title}
                          </h5>
                          <span className={`px-2 py-1 rounded-full text-xs font-cta border ${getStatusColor(appointment?.status)}`}>
                            {appointment?.status}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{appointment?.client}</p>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-muted-foreground">
                            {formatTime(appointment?.date)} ({appointment?.duration}min)
                          </span>
                          <span className={`px-2 py-1 rounded-full border ${getTypeColor(appointment?.type)}`}>
                            {appointment?.type}
                          </span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-4">
                      <Icon name="Calendar" size={32} className="text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">No appointments scheduled</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Availability Slots */}
            <div>
              <h4 className="font-subheading text-foreground mb-3">Today's Availability</h4>
              <div className="space-y-2">
                {availabilitySlots?.map((slot, index) => (
                  <div key={index} className={`flex items-center justify-between p-2 rounded-lg ${
                    slot?.available ? 'bg-success/10 text-success' : 'bg-muted text-muted-foreground'
                  }`}>
                    <span className="text-sm font-mono">{slot?.time}</span>
                    <div className="flex items-center space-x-2">
                      <Icon 
                        name={slot?.available ? 'CheckCircle' : 'XCircle'} 
                        size={16} 
                      />
                      <span className="text-xs font-cta">
                        {slot?.available ? 'Available' : 'Booked'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailabilityCalendar;