import React from 'react'

export type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, align = 'left', className }) => {
  const alignment = align === 'center' ? 'text-center items-center' : 'text-left items-start';
  return (
    <div className={`mb-8 flex flex-col ${alignment} ${className ?? ''}`}>
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      {subtitle && (
        <p className="text-foreground/70 text-lg max-w-2xl">{subtitle}</p>
      )}
    </div>
  )
}

export default SectionHeader
