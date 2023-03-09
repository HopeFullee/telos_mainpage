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
  ServiceIcon,
  IllustIcon,
} from 'components/shared/Icons'

type ClassIconProps = {
  className: string
}

const ClassIcon = ({ className }: ClassIconProps) => {
  return (
    <>
      {className === 'Service Planner' && (
        <ServiceIcon className="h-70 w-70 sm:h-80 sm:w-80" />
      )}
      {className === 'Game Contents Planner' && (
        <ContentIcon className="h-70 w-70 sm:h-80 sm:w-80" />
      )}
      {className === 'Unity Client Developer' && (
        <ClientIcon className="h-70 w-70 sm:h-80 sm:w-80" />
      )}
      {className === 'Front-end Developer' && (
        <FrontendIcon className="h-70 w-70 sm:h-80 sm:w-80" />
      )}
      {className === 'Back-end Developer' && (
        <BackendIcon className="h-70 w-70 sm:h-80 sm:w-80" />
      )}
      {className === '2D Graphic Designer' && (
        <IllustIcon className="h-70 w-70 sm:h-80 sm:w-80" />
      )}
      {className === '3D Modeler' && (
        <GraphicIcon className="h-70 w-70 sm:h-80 sm:w-80" />
      )}
      {className === 'BX Designer' && (
        <DesignIcon className="h-70 w-70 sm:h-80 sm:w-80" />
      )}
      {className === 'Marketer' && (
        <MarketIcon className="h-70 w-70 sm:h-80 sm:w-80" />
      )}
      {className === 'Management Supporter' && (
        <ManagementIcon className="h-70 w-70 sm:h-80 sm:w-80" />
      )}
    </>
  )
}

export default ClassIcon
