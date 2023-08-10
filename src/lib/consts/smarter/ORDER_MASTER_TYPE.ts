export const ORDER_MASTER_TYPE = `import graphene
from graphene_django import DjangoObjectType

class OrderMasterType(DjangoObjectType):
    class Meta:
        model = OrderMaster

    details = graphene.List(OrderDetailType)
`;
