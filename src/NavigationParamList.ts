export type MainStackParamList = {
    Login: undefined;
    Register: undefined;
    BuyerDashboard: undefined;
    DriverDashboard: undefined;
    SupplierDashboard: undefined;
    MaterialSearch: undefined;
    OrderTracking: { orderId: string };
    InventoryManagement: undefined;
    Payment: { amount: number; orderId: string };
};