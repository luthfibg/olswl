import Header from '../components/Header'
import SidebarAdmin from '../components/SidebarAdmin'
import { cards } from '../data/data-placeholder'
import { useSidebar } from '../contexts/SidebarContext'
import CardStat from '../components/CardStat'
import RevenueChart from '../components/RevenueChart'
import StockChart from '../components/StockChart'
import ActivityList from '../components/ActivityList'
import TopProductsStatTabled from '../components/TopProductsStatTabled'
import OrderStatTabled from '../components/OrderStatTabled'

const Dashboard = () => {
    const { sidebarExpanded } = useSidebar();
    return (
        <>
            <div className={`grid grid-cols-1 md:grid-cols-3 ${sidebarExpanded ? 'lg:grid-cols-4' : 'lg:grid-cols-6'} gap-3 mb-5`}>
                {cards.map((card, index) => {
                    if (card.type === 'top-products-table') {
                        return <TopProductsStatTabled key={index} {...card} />
                    } else if (card.type === 'orders-stat-table') {
                        return <OrderStatTabled key={index} {...card} />
                    } else {
                        return <CardStat key={index} {...card}/>
                    }
                })}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-6 gap-3">
                <RevenueChart />
                <StockChart />
                <ActivityList />
            </div>
        </>
    )
}

export default Dashboard