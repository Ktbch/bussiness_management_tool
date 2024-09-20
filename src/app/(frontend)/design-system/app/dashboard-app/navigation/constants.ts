import { INavigationConfig } from "./types";


export const sideBarNavigationItems: INavigationConfig[] = [
    {
        navItemName: 'Inventory Mangement',
        icon: 'Activity',
        href: '/dashboard/inventory-management'
    },
    {
        navItemName: 'Billing & Invoicing',
        icon: 'pricingIcon',
        href: '/billing-invoicing'
    }
]