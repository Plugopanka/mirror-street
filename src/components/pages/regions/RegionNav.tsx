import { Box } from '@mui/material';
import NavTitle from '../../common/navPopupTitle/navPopupTitle';
import { useState } from 'react';
import RegionEvent from './RegionEvent';
import RegionNew from './RegionNew';

export default function RegionNav() {
    const [selectedTab, setSelectedTab] = useState('Объекты');

    const handleTabChange = (label: string) => {
        setSelectedTab(label);
    };

    const tabs = [
        { label: 'Объекты', onClick: () => handleTabChange('Объекты') },
        { label: 'Новости (6)', onClick: () => handleTabChange('Новости') },
        { label: 'Мероприятия (8)', onClick: () => handleTabChange('Мероприятия') },
    ];

    return (
        <Box sx={{ marginTop: '64px' }}>
            <NavTitle tabs={tabs} margin="0 0 0 80px" />
            {selectedTab === 'Объекты' && <RegionNew />}
            {selectedTab === 'Новости' && <RegionNew />}
            {selectedTab === 'Мероприятия' && <RegionEvent />}
        </Box>
    );
}