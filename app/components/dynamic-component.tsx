import React from 'react';
import * as AiReactIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as BsIcons from "react-icons/bs";
import * as RiIcons from "react-icons/ri";
import { IconType } from "react-icons";

// Define the type for all icon names
type AiIconNames = keyof typeof AiReactIcons;
type FaIconNames = keyof typeof FaIcons;
type SiIconNames = keyof typeof SiIcons;
type BsIconNames = keyof typeof BsIcons;
type RiIconNames = keyof typeof RiIcons;

// Props type
type DynamicComponentProps = {
  iconName: string;
  className?: string;
};

function DynamicComponent({ iconName, className }: DynamicComponentProps) {
    const DisplayIcons = (iconName: string): React.ComponentType<React.HTMLAttributes<HTMLOrSVGElement>> | null => {
        // Determine and return the correct icon component type or null
        if (iconName.startsWith("Ai")) {
            const IconComponent = AiReactIcons[iconName as AiIconNames] as IconType;
            return IconComponent || null;
        }
        if (iconName.startsWith("Fa")) {
            const IconComponent = FaIcons[iconName as FaIconNames] as IconType;
            return IconComponent || null;
        }
        if (iconName.startsWith("Si")) {
            const IconComponent = SiIcons[iconName as SiIconNames] as IconType;
            return IconComponent || null;
        }
        if (iconName.startsWith("Bs")) {
            const IconComponent = BsIcons[iconName as BsIconNames] as IconType;
            return IconComponent || null;
        }
        if (iconName.startsWith("Ri")) {
            const IconComponent = RiIcons[iconName as RiIconNames] as IconType;
            return IconComponent || null;
        }
        return null; // Return null if the icon isn't found
    };

    const renderIcon = () => {
        const IconComponent = DisplayIcons(iconName);
        // Ensure IconComponent can accept className and other HTML attributes
        if (IconComponent) {
            return <IconComponent className={className} style={{ fontSize: '24px' }} />;
        } else {
            return <span>Icon not found</span>;
        }
    };

    return (
        <div>
            {renderIcon()}
        </div>
    );
}

export default DynamicComponent;
