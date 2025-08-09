import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TimelineFilters = ({ 
  filters, 
  activeFilters, 
  onFilterChange, 
  viewMode, 
  onViewModeChange,
  sortOrder,
  onSortOrderChange 
}) => {
  return (
    <div className="bg-card border border-border rounded-lg shadow-intelligent p-6 mb-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
        {/* Filter Categories */}
        <div className="flex flex-wrap gap-2">
          <span className="text-sm font-cta text-muted-foreground mr-3">Filter by:</span>
          {filters?.map((filter) => (
            <Button
              key={filter?.key}
              variant={activeFilters?.includes(filter?.key) ? "default" : "outline"}
              size="sm"
              iconName={filter?.icon}
              iconPosition="left"
              onClick={() => onFilterChange(filter?.key)}
              className="transition-intelligent"
            >
              {filter?.label}
            </Button>
          ))}
        </div>

        {/* View Controls */}
        <div className="flex items-center space-x-4">
          {/* View Mode Toggle */}
          <div className="flex items-center space-x-2">
            <span className="text-sm font-cta text-muted-foreground">View:</span>
            <div className="flex bg-muted rounded-lg p-1">
              <Button
                variant={viewMode === 'timeline' ? "default" : "ghost"}
                size="sm"
                iconName="Clock"
                onClick={() => onViewModeChange('timeline')}
                className="px-3"
              >
                Timeline
              </Button>
              <Button
                variant={viewMode === 'grid' ? "default" : "ghost"}
                size="sm"
                iconName="Grid3X3"
                onClick={() => onViewModeChange('grid')}
                className="px-3"
              >
                Grid
              </Button>
            </div>
          </div>

          {/* Sort Order */}
          <div className="flex items-center space-x-2">
            <span className="text-sm font-cta text-muted-foreground">Sort:</span>
            <Button
              variant="outline"
              size="sm"
              iconName={sortOrder === 'desc' ? "ArrowDown" : "ArrowUp"}
              iconPosition="left"
              onClick={onSortOrderChange}
            >
              {sortOrder === 'desc' ? 'Newest' : 'Oldest'}
            </Button>
          </div>
        </div>
      </div>
      {/* Active Filters Display */}
      {activeFilters?.length > 0 && (
        <div className="flex items-center space-x-2 mt-4 pt-4 border-t border-border">
          <span className="text-sm font-cta text-muted-foreground">Active filters:</span>
          {activeFilters?.map((filterKey) => {
            const filter = filters?.find(f => f?.key === filterKey);
            return (
              <div 
                key={filterKey}
                className="flex items-center space-x-1 bg-primary/10 text-primary px-2 py-1 rounded-full text-xs"
              >
                <Icon name={filter?.icon} size={12} />
                <span>{filter?.label}</span>
                <button
                  onClick={() => onFilterChange(filterKey)}
                  className="ml-1 hover:bg-primary/20 rounded-full p-0.5 transition-intelligent"
                >
                  <Icon name="X" size={10} />
                </button>
              </div>
            );
          })}
          <Button
            variant="ghost"
            size="sm"
            iconName="X"
            onClick={() => onFilterChange('clear')}
            className="text-xs"
          >
            Clear All
          </Button>
        </div>
      )}
    </div>
  );
};

export default TimelineFilters;