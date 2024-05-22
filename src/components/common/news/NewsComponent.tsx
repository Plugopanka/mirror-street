import { Box, Container, List, ListItem } from '@mui/material';
import Title from '../titleMainPage/titleMainPage';
import FilterEvents from '../filters/FilterEvents';
import NotFound from '../notFound/NotFound';
import Background from '../../../assets/images/background-newsgrid.svg';
import NewsGrid from './NewsGrid';

export default function NewsComponent() {

    return (
        <Container component="section" sx={{ background: `url(${Background}) no-repeat right 0% top 20%`, p: { sm: '0 0 60px' }, m: '0', width: '100%', maxWidth: { lg: '100%' } }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', p: { sm: '0' }, m: '0 auto', width: '91%', maxWidth: { lg: '1320px' } }}>
                <Title title="Новости" background="none" margin="0 0 24px 0" width="100%" height="100%" padding="0" color="#fff" />
                <FilterEvents />
                <NotFound title="По заданным параметрам новостей не найдено :( Пожауйста, измени настройки фильтров, чтобы увидеть актуальные новости." />
                <NewsGrid />
            </Box>
        </Container>
    );
}