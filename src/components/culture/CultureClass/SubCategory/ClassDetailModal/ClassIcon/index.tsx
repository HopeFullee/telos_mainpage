import React from 'react'
import {
  FrontendIcon,
  BackendIcon,
  ClientIcon,
  DesignIcon,
  ContentIcon,
  GraphicIcon,
  ManagementIcon,
  MarketIcon,
  StrategicIcon,
  IllustIcon,
} from 'components/shared/Icons'

type ClassIconProps = {
  className: string
}

const ClassIcon = ({ className }: ClassIconProps) => {
  return (
    <>
      {className === 'Strategic Planner' && (
        <StrategicIcon className="h-70 w-70 md:h-85 md:w-85" />
      )}
      {className === 'Game Contents Planner' && (
        <ContentIcon className="h-70 w-70 md:h-85 md:w-85" />
      )}
      {className === 'Unity Client Developer' && (
        <ClientIcon className="h-70 w-70 md:h-85 md:w-85" />
      )}
      {className === 'Front-end Developer' && (
        <FrontendIcon className="h-70 w-70 md:h-85 md:w-85" />
      )}
      {className === 'Back-end Developer' && (
        <BackendIcon className="h-70 w-70 md:h-85 md:w-85" />
      )}
      {className === '2D Graphic Designer' && (
        <IllustIcon className="h-70 w-70 md:h-85 md:w-85" />
      )}
      {className === '3D Modeler' && (
        <GraphicIcon className="h-70 w-70 md:h-85 md:w-85" />
      )}
      {className === 'BX Designer' && (
        <DesignIcon className="h-70 w-70 md:h-85 md:w-85" />
      )}
      {className === 'Marketer' && (
        <MarketIcon className="h-70 w-70 md:h-85 md:w-85" />
      )}
      {className === 'Management Supporter' && (
        <ManagementIcon className="h-70 w-70 md:h-85 md:w-85" />
      )}
    </>
  )
}

export default ClassIcon
