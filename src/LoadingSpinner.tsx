import * as React from 'react'

export interface Props {
    className?: string
}

export const LoadingSpinner: React.StatelessComponent<Props> = props => (
    <div className={`loading-spinner ${props.className || ''}`} />
)
