import { useState } from 'react';

export default function ClockPicker({ label, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState('hours'); // 'hours' or 'minutes'

  // Parse initial value (expected format "HH:MM")
  const [hours, minutes] = value.split(':').map(Number);

  const handleSelectNumber = (num) => {
    if (view === 'hours') {
      const formattedHour = String(num).padStart(2, '0');
      const formattedMin = String(minutes).padStart(2, '0');
      onChange(`${formattedHour}:${formattedMin}`);
      setView('minutes'); // Automatically switch to minutes after choosing the hour
    } else {
      const formattedHour = String(hours).padStart(2, '0');
      const formattedMin = String(num).padStart(2, '0');
      onChange(`${formattedHour}:${formattedMin}`);
      setIsOpen(false); // Close dropdown picker
      setView('hours'); // Reset view back to hours
    }
  };

  // Generate degree angles for circular layout
  const getPositionStyles = (index, total) => {
    const angle = (index * 360) / total - 90; // Offset by -90 deg to start at 12 o'clock
    const radius = 76; // Distance from center in pixels
    return {
      transform: `rotate(${angle}deg) translate(${radius}px) rotate(${-angle}deg)`,
    };
  };

  const hoursArray = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const minutesArray = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];

  return (
    <div className="relative flex items-center justify-between gap-6 w-full py-1">
      <label className="font-medium text-gray-700">{label}</label>
      
      {/* Time Display Button */}
      <button 
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="border border-gray-300 rounded px-3 py-1.5 bg-white font-mono text-gray-800 shadow-sm hover:border-blue-400 transition-colors w-24 text-center cursor-pointer"
      >
        {value}
      </button>

      {/* Interactive Clock Modal Overlay */}
      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 top-10 z-50 bg-slate-900 text-white rounded-2xl p-4 shadow-xl flex flex-col items-center w-60 border border-slate-700 animate-in fade-in zoom-in-95 duration-100">
            
            {/* Header Display Selector */}
            <div className="flex gap-2 items-center text-2xl font-bold mb-4 font-mono">
              <button 
                type="button"
                onClick={() => setView('hours')} 
                className={`transition-colors ${view === 'hours' ? 'text-blue-400' : 'text-slate-400 hover:text-slate-200'}`}
              >
                {String(hours).padStart(2, '0')}
              </button>
              <span className="text-slate-500">:</span>
              <button 
                type="button"
                onClick={() => setView('minutes')} 
                className={`transition-colors ${view === 'minutes' ? 'text-blue-400' : 'text-slate-400 hover:text-slate-200'}`}
              >
                {String(minutes).padStart(2, '0')}
              </button>
            </div>

            {/* Circular Clock Face Canvas */}
            <div className="relative w-48 h-48 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center select-none">
              
              {/* Dynamic Center Needle pin indicator */}
              <div className="absolute w-2 h-2 rounded-full bg-blue-500 z-10" />
              <div 
                className="absolute origin-bottom bottom-1/2 left-[calc(50%-1px)] w-0.5 bg-blue-500/60 transition-transform duration-200"
                style={{ 
                  height: '72px',
                  transform: `rotate(${view === 'hours' ? (hours % 12) * 30 : minutes * 6}deg)` 
                }} 
              />

              {/* Render either Hours or Minutes around the perimeter */}
              {view === 'hours' ? (
                hoursArray.map((num, i) => {
                  const isSelected = hours === num || (num === 12 && hours === 0);
                  return (
                    <button
                      key={num}
                      type="button"
                      onClick={() => handleSelectNumber(num === 12 ? 0 : num)}
                      style={getPositionStyles(i, 12)}
                      className={`absolute w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm transition-all duration-150 cursor-pointer ${
                        isSelected ? 'bg-blue-500 text-white shadow-lg scale-110 z-20' : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                      }`}
                    >
                      {num}
                    </button>
                  );
                })
              ) : (
                minutesArray.map((num, i) => {
                  const isSelected = minutes === num;
                  return (
                    <button
                      key={num}
                      type="button"
                      onClick={() => handleSelectNumber(num)}
                      style={getPositionStyles(i, 12)}
                      className={`absolute w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs transition-all duration-150 cursor-pointer ${
                        isSelected ? 'bg-blue-500 text-white shadow-lg scale-110 z-20' : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                      }`}
                    >
                      {String(num).padStart(2, '0')}
                    </button>
                  );
                })
              )}
            </div>
            
            {/* Direct Quick-Toggle link */}
            <div className="mt-3 text-xs text-slate-400 text-center">
              Picking <span className="text-blue-400 capitalize font-medium">{view}</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
