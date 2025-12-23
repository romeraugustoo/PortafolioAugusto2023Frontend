import { useState } from 'react';
import BodyHome from '../components/BodyHome.jsx';
import PageLayout from '../components/PageLayout.jsx';

export const HomeScreen = () => {
    const [activeSection, setActiveSection] = useState('');
    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    return (
        <PageLayout activeSection={activeSection}>
            <BodyHome onSectionChange={handleSectionChange} />
        </PageLayout>
    );
}
export default HomeScreen;