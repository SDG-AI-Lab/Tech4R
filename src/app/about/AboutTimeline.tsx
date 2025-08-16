import React from 'react';
import { supabase } from '@/lib/supabaseClient';
import { Markdown } from '@/components/Markdown';

type AboutTimelineEntryStatus = 'completed' | 'in-progress' | 'to-do'

type Milestone = {
  id: number;
  description: string;
  status: AboutTimelineEntryStatus;
  sort_date: string;
  display_date: string;
}

type AboutTimelineEntryProps = {
  status: AboutTimelineEntryStatus
  description: string
  date: string
  isLast?: boolean
}

const ABOUT_TIMELINE_COLORS = {
  Primary: '#3B873E',
  Secondary: "#2196F3"
} as const

const AboutTimelineEntryStatusLabel: React.FC<{ status: AboutTimelineEntryStatus }> = ({ status }) => {
  const statusConfigs: Record<AboutTimelineEntryStatus, { text: string; style?: React.CSSProperties; className?: string }> = {
    'completed': {
      text: 'Completed',
      style: {
        background: 'linear-gradient(rgba(232, 245, 233, 0.5), rgba(232, 245, 233, 0.5)), white',
        color: ABOUT_TIMELINE_COLORS.Primary
      }
    },
    'in-progress': {
      text: 'In Progress',
      style: {
        background: 'linear-gradient(rgba(227, 242, 253, 0.5), rgba(227, 242, 253, 0.5)), white',
        color: ABOUT_TIMELINE_COLORS.Secondary
      }
    },
    'to-do': {
      text: 'To Do',
      className: 'bg-neutral-02 text-white'
    }
  };

  const config = statusConfigs[status];

  return (
    <span
      className={`text-xs font-normal py-1 px-2.5 rounded-2xl ${config.className || ''}`}
      {...(config.style && { style: config.style })}
    >
      {config.text}
    </span>
  );
}

const AboutTimelineEntryStatusBullet: React.FC<{ status: AboutTimelineEntryStatus }> = ({ status }) => {
  if (status === 'completed') {
    return (
      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: ABOUT_TIMELINE_COLORS.Primary }}>
        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
      </div>
    );
  }

  if (status === 'in-progress') {
    return (
      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: ABOUT_TIMELINE_COLORS.Secondary }}>
        <span className="text-color-02 text-sm font-bold">i</span>
      </div>
    );
  }

  return (
    <div className="w-5 h-5 rounded-full bg-neutral-02 flex items-center justify-center flex-shrink-0">
      <span className="text-color-02 text-sm font-bold">i</span>
    </div>
  );
}

const AboutTimelineEntry: React.FC<AboutTimelineEntryProps> = ({ status, date, description, isLast }) => {
  return (
    <div className="flex gap-4">
      <div className="w-5 flex flex-col items-center">
        <AboutTimelineEntryStatusBullet status={status} />
        {!isLast && <div className="w-0.5 bg-neutral-01 flex-grow"></div>}
      </div>

      <div className="pb-5 flex flex-col gap-1">
        <div className="flex flex-column gap-2 items-center">
          <AboutTimelineEntryStatusLabel status={status} />
          <h3 className="text-white font-semibold text-sm">{date}</h3>
        </div>
        <Markdown>{description}</Markdown>
      </div>
    </div>
  );
};

export const AboutTimeline: React.FC = async () => {
  const { data: milestones, error } = await supabase
    .from('milestones')
    .select('*')
    .order('sort_date', { ascending: true }) as { data: Milestone[] | null, error: Error | null };

  if (error) {
    return (
      <div className="bg-color-02 w-full px-6 py-12 sm:px-30 sm:py-30">
        <div className="flex flex-col gap-16">
          <h2 className="text-center text-5xl font-semibold text-white tracking-[-1.5px]">Timeline of major milestones</h2>
          <p className="text-center text-white">Failed to load milestones. Please try again later.</p>
        </div>
      </div>
    );
  }

  if (!milestones || milestones.length === 0) {
    return (
      <div className="bg-color-02 w-full px-6 py-12 sm:px-30 sm:py-30">
        <div className="flex flex-col gap-16">
          <h2 className="text-center text-5xl font-semibold text-white tracking-[-1.5px]">Timeline of major milestones</h2>
          <p className="text-center text-white">No milestones available at this time.</p>
        </div>
      </div>
    );
  }

  // Calculate midpoint with slight bias to left column
  const midpoint = Math.ceil(milestones.length / 2) + 1;
  const leftColumn = milestones.slice(0, midpoint);
  const rightColumn = milestones.slice(midpoint);

  return <div className="container bg-color-02 w-full sm:rounded-[20px] px-6 py-12 sm:px-16 lg:px-30 sm:py-30">
    <div className="flex flex-col gap-16">
      <h2 className="text-center text-5xl font-semibold text-white tracking-[-1.5px]">Timeline of major milestones</h2>

      <div className="flex flex-col lg:flex-row lg:gap-x-20">
        <div className="flex-1 flex flex-col">
          {leftColumn.map((milestone) => (
            <AboutTimelineEntry
              key={milestone.id}
              date={milestone.display_date}
              status={milestone.status}
              description={milestone.description}
            />
          ))}
        </div>
        <div className="flex-1 flex flex-col">
          {rightColumn.map((milestone, index) => (
            <AboutTimelineEntry
              key={milestone.id}
              date={milestone.display_date}
              status={milestone.status}
              description={milestone.description}
              isLast={index === rightColumn.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
}