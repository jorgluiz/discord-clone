import React from "react";

import { Container, HashtagIcon, InviteIcon, SettingsIcon } from './styles'

export interface Props {
    channelName: string;
    selected?: boolean; // opcional -> ?:
}

const ChannelButton: React.FC<Props> = ({
    channelName,
    selected
}) => {
    return (
        <Container className={selected ? 'active' : ''}>
            <div>
                <HashtagIcon />
                <span>{channelName}</span>
            </div>

            <div>
                <InviteIcon className="opacity"/>
                <SettingsIcon className="opacity"/>
            </div>
        </Container>
    )
}

export default ChannelButton;