import React from 'react'

const PageHeader = ({ title, subtitle, children }) => {
    return (
        <div className="mb-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-medium text-slate-900 tracking-tight mb-2">
                        {title}
                    </h1>

                    {subtitle && (
                        <p className="text-slate-500 text-sm">
                            {subtitle}
                        </p>
                    )}
                </div>
            </div>

            {children && (
                <div className="mt-6">
                    {children}
                </div>
            )}
        </div>
    );
};

export default PageHeader