export const SCHEMA = `class Query(graphene.ObjectType):
    order_master = graphene.Field(OrderMasterType, order_master_id=graphene.Int(), order_number=graphene.String())
    
        @staticmethod
    def resolve_order_master(root, info, order_number=None, order_master_id=None):
        if order_number:
            return OrderMaster.objects.get(order_number=order_number)
        return OrderMaster.objects.get(pk=order_master_id)
        
schema = graphene.Schema(query=Query, mutation=Mutation)

`;
