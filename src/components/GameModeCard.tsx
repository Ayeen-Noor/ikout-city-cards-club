
import React from 'react';
import { Users } from 'lucide-react';

interface GameModeCardProps {
  title: string;
  subtitle?: string;
  playerCount?: string;
  bgColor: string;
  textColor?: string;
  icon?: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}

const GameModeCard: React.FC<GameModeCardProps> = ({
  title,
  subtitle,
  playerCount,
  bgColor,
  textColor = "text-white",
  icon,
  onClick,
  disabled = false
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${bgColor} ${textColor} p-6 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed min-h-[200px] flex flex-col justify-center items-center space-y-3`}
    >
      {icon && <div className="text-4xl">{icon}</div>}
      <div className="text-center">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        {subtitle && <p className="text-sm opacity-90 mb-2">{subtitle}</p>}
        {playerCount && (
          <div className="flex items-center justify-center space-x-1 text-sm">
            <Users className="w-4 h-4" />
            <span>{playerCount}</span>
          </div>
        )}
      </div>
    </button>
  );
};

export default GameModeCard;
