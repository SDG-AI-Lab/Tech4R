type AboutTimelineEntryStatus = 'completed' | 'in-progress' | 'to-do'

type AboutTimelineEntryProps = {
  status: AboutTimelineEntryStatus
  title: string
}

const AboutTimelineEntryStatusLabel: React.FC<{ status: AboutTimelineEntryStatus }> = ({ status }) => {
  const statusConfigs: Record<AboutTimelineEntryStatus, { text: string; style?: React.CSSProperties; className?: string }> = {
    'completed': {
      text: 'Completed',
      style: { 
        background: 'linear-gradient(rgba(232, 245, 233, 0.5), rgba(232, 245, 233, 0.5)), white',
        color: '#3B873E' 
      }
    },
    'in-progress': {
      text: 'In Progress',
      style: { 
        background: 'linear-gradient(rgba(227, 242, 253, 0.5), rgba(227, 242, 253, 0.5)), white',
        color: '#0B79D0' 
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
      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#3B873E' }}>
        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
      </div>
    );
  }
  
  if (status === 'in-progress') {
    return (
          <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#2196F3' }}>
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

const AboutTimelineEntry: React.FC<AboutTimelineEntryProps> = ({ status, title}) => {
  return (
    <div className="flex gap-4">
      <div className="w-5 flex flex-col items-center">
        <AboutTimelineEntryStatusBullet status={status} />
        <div className="w-0.5 bg-neutral-01 flex-grow"></div>
      </div>
      
      <div className="pb-5 flex flex-col gap-1">
        <div className="flex flex-column gap-2 items-center">
          <AboutTimelineEntryStatusLabel status={status} />
          <h3 className="text-white font-semibold text-sm">{title}</h3>
        </div>
        <p className="text-neutral-01 font-sm font-normal leading-relaxed">Timeline entry description goes here.</p>
      </div>
    </div>
  );
};

export const AboutTimeline : React.FC = () => {
  return <div className="bg-color-02 w-full px-6 py-12 sm:px-30 sm:py-30">
    <div className="flex flex-col gap-16">
      <h2 className="text-center text-5xl font-semibold text-white tracking-[-1.5px]">Timeline of major milestones</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 lg:grid-flow-col lg:gap-x-20">
        <AboutTimelineEntry title="Milestone title" status="completed" />
        <AboutTimelineEntry title="Milestone title" status="in-progress" />
        <AboutTimelineEntry title="Milestone title" status="to-do" />
        <AboutTimelineEntry title="Milestone title" status="to-do" />
      </div>
    </div>
  </div>
}