import avatar from '../assets/leaders/avatar.png';
import {useState} from 'react';
import ClockPicker from '../components/ClockPicker';


export default function Sadhna() {
    // Shared dataset matching today's timeline entries
    const historicalSadhanaData = [
        { date: '18 Sep', rounds: 6 },  // Under threshold -> Red
        { date: '19 Sep', rounds: 16 }, // Target met -> Green
        { date: '20 Sep', rounds: 12 }, // Mid-tier threshold -> Yellow
        { date: '21 Sep', rounds: 16 }, // Target met -> Green
        { date: '22 Sep', rounds: 18 }, // Target met -> Green
    ];

     return (
        <div className="min-h-screen bg-slate-50 p-4 sm:p-6 flex justify-center">
            <div className="w-full max-w-5xl flex flex-col gap-6">
                
                {/* Upper Section: Profile and standalone stretched Histogram */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 items-stretch">
                    
                    {/* Left profile layout wrapper */}
                    <div className="md:col-span-1 flex justify-center md:justify-start">
                        <ProfileCard name="Amit" image={avatar} description="Hare Krishna" />
                    </div>

                    {/* Right block: Histogram takes all remaining width columns */}
                    <div className="md:col-span-2 lg:col-span-3 flex">
                        <SadhanaHistogram data={historicalSadhanaData} />
                    </div>
                    
                </div>

                {/* Lower Section: Full-width multi-field entry form */}
                <div className="w-full">
                    <Details />
                </div>

            </div>
        </div>
    );
}

const ProfileCard = ({ name, image, description }) => {
    return (
        <div className="profile-card text-center p-5 bg-blue-200 shadow-md rounded-xl flex flex-col items-center justify-center w-full max-w-[240px] md:max-w-none gap-3 border border-blue-300">
            <img src={image} alt={name} className="h-32 w-32 object-cover rounded-full border-4 border-white shadow-sm" />
            <div>
                <h3 className="text-lg font-bold text-blue-900">{name}</h3>
                <p className="text-blue-700 font-medium text-xs mt-0.5">{description}</p>
            </div>
        </div>
    );
};



const Date = () => {
    return (
        <div className="date text-center p-4 bg-blue-100 shadow-md rounded-lg w-fit mx-auto mt-4">
            <h3>Date</h3>
            <p> </p>
        </div>
    );
};


const Details = () => {
    // 1. Group all 21 separate states into a single unified object
    const [formData, setFormData] = useState({
        wakeUpTime: '04:30', 
        sleepTime: '22:00',
        chantStartTime: '05:00',
        chantEndTime: '06:00',
        morningProgramAttendTime: '06:00',
        morningProgramDuration: '01:00',
        rounds: 0,
        hearing: '',
        hearingDuration: 0,
        reading: '',
        readingDuration: 0,
        preaching: '',
        preachingDuration: 0,
        services: '',
        servicesDuration: 0,
        rest: 0,
        event: '',
        eventDuration: 0,
        other: '',
        otherDuration: 0,
        notes: ''
    });

    // 2. Handler for custom components that return direct values (like ClockPicker)
    const handleValueChange = (field, value) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value
        }));
    };

    // 3. Handler for native HTML inputs (used in standard inputs)
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitting Sadhana Data:", formData);
        // Add your API submission logic here
    };

    return (
    <form onSubmit={handleSubmit}  className="details p-5 sm:p-6 bg-blue-100 shadow-md rounded-xl w-full mt-2 flex flex-col gap-6">
        
        {/* Section 1: Core Time Tracking */}
        <div>
            <h4 className="text-blue-800 font-bold border-b border-blue-200 pb-1 mb-3 text-sm tracking-wide uppercase">⏰ Sleep & Wake Routine</h4>
            <div className="flex flex-col gap-3">
                <ClockPicker 
                    label="Wake Up Time" 
                    value={formData.wakeUpTime} 
                    onChange={(val) => handleValueChange('wakeUpTime', val)} 
                />
                <ClockPicker 
                    label="Sleep Time" 
                    value={formData.sleepTime} 
                    onChange={(val) => handleValueChange('sleepTime', val)} 
                />
            </div>
        </div>

        {/* Section 2: Chanting Sadhana */}
        <div>
            <h4 className="text-blue-800 font-bold border-b border-blue-200 pb-1 mb-3 text-sm tracking-wide uppercase">📿 Chanting & Morning Program</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <ClockPicker 
                    label="Chant Start Time" 
                    value={formData.chantStartTime} 
                    onChange={(val) => handleValueChange('chantStartTime', val)} 
                />
                <ClockPicker 
                    label="Chant End Time" 
                    value={formData.chantEndTime} 
                    onChange={(val) => handleValueChange('chantEndTime', val)} 
                />
                <ClockPicker 
                    label="Morning Program Attendance" 
                    value={formData.morningProgramAttendTime} 
                    onChange={(val) => handleValueChange('morningProgramAttendTime', val)} 
                />
                <InputField 
                    label="Morning Program Duration" 
                    value={formData.morningProgramDuration} 
                    onChange={(val) => handleValueChange('morningProgramDuration', val)} 
                />
                <div className="sm:col-span-2">
                    <InputField 
                        label="Chanting Rounds" 
                        value={formData.rounds} 
                        onChange={(val) => handleValueChange('rounds', val)} 
                    />
                </div>
            </div>
        </div>

        {/* Section 3: Spiritual Study & Devotional Service */}
        <div>
            <h4 className="text-blue-800 font-bold border-b border-blue-200 pb-1 mb-3 text-sm tracking-wide uppercase">📚 Hearing, Reading & Service</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InputField 
                    label="Hearing Topic" 
                    value={formData.hearing} 
                    onChange={(val) => handleValueChange('hearing', val)} 
                />
                <InputField 
                    label="Hearing Duration (mins)" 
                    value={formData.hearingDuration} 
                    onChange={(val) => handleValueChange('hearingDuration', val)} 
                />
                <InputField 
                    label="Reading Topic" 
                    value={formData.reading} 
                    onChange={(val) => handleValueChange('reading', val)} 
                />
                <InputField 
                    label="Reading Duration (mins)" 
                    value={formData.readingDuration} 
                    onChange={(val) => handleValueChange('readingDuration', val)} 
                />
                <InputField 
                    label="Preaching Layout" 
                    value={formData.preaching} 
                    onChange={(val) => handleValueChange('preaching', val)} 
                />
                <InputField 
                    label="Preaching Duration (mins)" 
                    value={formData.preachingDuration} 
                    onChange={(val) => handleValueChange('preachingDuration', val)} 
                />
                <InputField 
                    label="Devotional Services" 
                    value={formData.services} 
                    onChange={(val) => handleValueChange('services', val)} 
                />
                <InputField 
                    label="Service Duration (mins)" 
                    value={formData.servicesDuration} 
                    onChange={(val) => handleValueChange('servicesDuration', val)} 
                />
            </div>
        </div>

        {/* Section 4: Other Activities & Notes */}
        <div>
            <h4 className="text-blue-800 font-bold border-b border-blue-200 pb-1 mb-3 text-sm tracking-wide uppercase">📝 Miscellaneous & Notes</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InputField 
                    label="Rest Duration (mins)" 
                    value={formData.rest} 
                    onChange={(val) => handleValueChange('rest', val)} 
                />
                <div className="hidden sm:block"></div> {/* Grid visual filler spacer */}
                <InputField 
                    label="Special Event / Festival" 
                    value={formData.event} 
                    onChange={(val) => handleValueChange('event', val)} 
                />
                <InputField 
                    label="Event Duration (mins)" 
                    value={formData.eventDuration} 
                    onChange={(val) => handleValueChange('eventDuration', val)} 
                />
                <InputField 
                    label="Other Activities" 
                    value={formData.other} 
                    onChange={(val) => handleValueChange('other', val)} 
                />
                <InputField 
                    label="Other Duration (mins)" 
                    value={formData.otherDuration} 
                    onChange={(val) => handleValueChange('otherDuration', val)} 
                />
                <div className="sm:col-span-2 flex flex-col gap-1">
                    <label className="font-medium text-gray-700">Reflection Notes</label>
                    <textarea
                        name="notes"
                        rows={3}
                        value={formData.notes}
                        onChange={handleInputChange}
                        className="border border-gray-300 rounded-lg px-3 py-1.5 bg-white text-gray-800 shadow-sm hover:border-blue-400 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                        placeholder="Key realisations from today's sadhana..."
                    />
                </div>
            </div>
        </div>
        
        {/* Action Button */}
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-3 rounded-lg shadow-md transition-all transform active:scale-95 text-center mt-2 cursor-pointer">
            Submit Daily Sadhana
        </button>
       
    </form>
);

};

const InputField = ({ label, value, onChange }) => {
    return (
        <div className="input-field flex flex-col gap-1">
            <label className="font-medium text-gray-700">{label}</label>
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="border border-gray-300 rounded px-3 py-1.5 bg-white text-gray-800 shadow-sm hover:border-blue-400 transition-colors"
            />
        </div>
    );
};


export const SadhanaGraph = ({ data }) => {
    if (!data || data.length === 0) return <p className="text-gray-500 text-sm">No tracking data available yet.</p>;

    // Configurable SVG Canvas Dimensions
    const width = 500;
    const height = 200;
    const padding = 40;

    // Find the max value dynamically to scale the chart Y-axis (min baseline is 16 rounds)
    const maxRounds = Math.max(...data.map(d => d.rounds), 16);

    // Calculate absolute canvas coordinates for SVG pathing
    const points = data.map((item, index) => {
        const x = padding + (index / (data.length - 1 || 1)) * (width - padding * 2);
        const y = height - padding - (item.rounds / maxRounds) * (height - padding * 2);
        return { x, y, ...item };
    });

    // Create the continuous SVG Line Command sequence
    const linePath = points.reduce((acc, p, i) => 
        i === 0 ? `M ${p.x} ${p.y}` : `${acc} L ${p.x} ${p.y}`, ''
    );

    return (
        <div className="bg-white p-4 rounded-xl shadow-md border border-blue-100 w-full max-w-xl mt-4">
            <h4 className="text-blue-900 font-bold text-sm tracking-wide uppercase mb-3">📈 Chanting Progress (Rounds v/s Date)</h4>
            
            <div className="w-full overflow-x-auto">
                <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto overflow-visible">
                    {/* Background Grid Lines (Horizontal metrics) */}
                    {[0, 0.5, 1].map((ratio, i) => {
                        const yVal = padding + ratio * (height - padding * 2);
                        const labelVal = Math.round(maxRounds * (1 - ratio));
                        return (
                            <g key={i} className="opacity-20">
                                <line x1={padding} y1={yVal} x2={width - padding} y2={yVal} stroke="#1e3a8a" strokeWidth="1" strokeDasharray="4" />
                                <text x={padding - 8} y={yVal + 4} textAnchor="end" className="text-[10px] fill-blue-900 font-medium font-mono">{labelVal}</text>
                            </g>
                        );
                    })}

                    {/* Chart Plot Path Line */}
                    {data.length > 1 && (
                        <path
                            d={linePath}
                            fill="none"
                            stroke="#3b82f6"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    )}

                    {/* Plot Points & Interactive Tooltips */}
                    {points.map((p, i) => (
                        <g key={i} className="group cursor-pointer">
                            {/* Hover Highlight Ring */}
                            <circle cx={p.x} cy={p.y} r="8" className="fill-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                            {/* Main Core Dot */}
                            <circle cx={p.x} cy={p.y} r="4" className="fill-blue-600 stroke-white stroke-2" />
                            
                            {/* Bottom X-Axis Date Strings */}
                            <text x={p.x} y={height - padding + 16} textAnchor="middle" className="text-[9px] fill-gray-500 font-mono font-medium">
                                {p.date}
                            </text>

                            {/* Floating Active Points Label */}
                            <g className="opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                                <rect x={p.x - 18} y={p.y - 24} width="36" height="16" rx="4" className="fill-slate-900" />
                                <text x={p.x} y={p.y - 13} textAnchor="middle" className="text-[9px] fill-white font-bold font-mono">
                                    {p.rounds}R
                                </text>
                            </g>
                        </g>
                    ))}
                </svg>
            </div>
        </div>
    );
};

import React from 'react';

export const SadhanaHistogram = ({ data }) => {
    if (!data || data.length === 0) return <p className="text-gray-500 text-sm">No data available.</p>;

    // 1. Expanded dimensions to let the histogram breath across the top block
    const width = 650; 
    const height = 250;
    const paddingLeft = 45;
    const paddingRight = 25;
    const paddingTop = 30;
    const paddingBottom = 45;

    const chartWidth = width - paddingLeft - paddingRight;
    const chartHeight = height - paddingTop - paddingBottom;

    const maxScaleValue = Math.max(...data.map(d => d.rounds), 16);

    const getThresholdStyles = (rounds) => {
        if (rounds < 8) {
            return { fill: '#ef4444', textClass: 'text-red-600' };
        } else if (rounds < 16) {
            return { fill: '#eab308', textClass: 'text-yellow-600' };
        } else {
            return { fill: '#22c55e', textClass: 'text-green-600' };
        }
    };

    // 2. Optimized bar distribution parameters to span wider across the viewport
    const barSpacing = 16;
    const totalSpacing = barSpacing * (data.length - 1 || 1);
    const barWidth = Math.max((chartWidth - totalSpacing) / data.length, 30);

    return (
        <div className="bg-white p-5 rounded-xl shadow-md border border-blue-100 w-full h-full flex flex-col justify-between">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <h4 className="text-blue-900 font-bold text-base tracking-wide uppercase">📊 Daily Analysis (Rounds Breakdown)</h4>
                
                <div className="flex gap-4 text-xs font-bold">
                    <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-red-500 block"></span> &lt; 8</span>
                    <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-yellow-500 block"></span> 8 - 15</span>
                    <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-green-500 block"></span> 16+</span>
                </div>
            </div>

            <div className="w-full overflow-x-auto">
                <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto overflow-visible">
                    
                    {/* Grid Lines with Enlarged Text Scaling */}
                    {[0, 8, 16].map((gridValue) => {
                        const yPos = height - paddingBottom - (gridValue / maxScaleValue) * chartHeight;
                        return (
                            <g key={gridValue} className="opacity-40">
                                <line x1={paddingLeft} y1={yPos} x2={width - paddingRight} y2={yPos} stroke="#64748b" strokeWidth="1" strokeDasharray="4" />
                                {/* Made Y-Axis value labels text-xs equivalents */}
                                <text x={paddingLeft - 10} y={yPos + 4} textAnchor="end" className="text-[12px] fill-slate-700 font-mono font-bold">{gridValue}</text>
                            </g>
                        );
                    })}

                    {/* Rendering Histogram Bars */}
                    {data.map((item, index) => {
                        const barHeight = (item.rounds / maxScaleValue) * chartHeight;
                        const xPos = paddingLeft + index * (barWidth + barSpacing);
                        const yPos = height - paddingBottom - barHeight;
                        
                        const config = getThresholdStyles(item.rounds);

                        return (
                            <g key={index} className="group cursor-pointer">
                                <rect
                                    x={xPos}
                                    y={yPos}
                                    width={barWidth}
                                    height={Math.max(barHeight, 3)}
                                    fill={config.fill}
                                    rx="4"
                                    className="transition-all duration-200 hover:opacity-85"
                                />

                                {/* 3. Made value text larger (text-[13px]) and bolder above the bars */}
                                <text
                                    x={xPos + barWidth / 2}
                                    y={yPos - 8}
                                    textAnchor="middle"
                                    className={`text-[13px] font-extrabold font-mono ${config.textClass}`}
                                >
                                    {item.rounds}
                                </text>

                                {/* 4. Made Date Labels larger (text-[12px]) underneath on X-Axis */}
                                <text
                                    x={xPos + barWidth / 2}
                                    y={height - paddingBottom + 20}
                                    textAnchor="middle"
                                    className="text-[12px] fill-slate-600 font-mono font-bold"
                                >
                                    {item.date}
                                </text>
                            </g>
                        );
                    })}
                </svg>
            </div>
        </div>
    );
};