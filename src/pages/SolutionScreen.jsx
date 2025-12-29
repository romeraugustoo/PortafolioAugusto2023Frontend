import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import TransporteSantaLucia from '../components/solutions/TransporteSantaLucia';
import RapiburguerSolution from '../components/solutions/RapiburguerSolution';
import PortfolioSolution from '../components/solutions/PortfolioSolution';

const SolutionScreen = () => {
    const { id } = useParams();

    const renderContent = () => {
        switch (id) {
            case 'tslc':
                return <TransporteSantaLucia />;
            case 'rapiburguer':
                return <RapiburguerSolution />;
            case 'portfolio':
                return <PortfolioSolution />;
            default:
                return <Navigate to="/" replace />;
        }
    };

    return (
        <PageLayout>
            {renderContent()}
        </PageLayout>
    );
};

export default SolutionScreen;
