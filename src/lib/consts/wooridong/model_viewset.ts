export const MODEL_VIEWSET = `class ModelViewSet(mixins.CreateModelMixin,
                   mixins.RetrieveModelMixin,
                   mixins.UpdateModelMixin,
                   mixins.DestroyModelMixin,
                   mixins.ListModelMixin,
                   GenericViewSet):
    """
    A viewset that provides default \`create()\`, \`retrieve()\`, \`update()\`,
    \`partial_update()\`, \`destroy()\` and \`list()\` actions.
    """
    pass
`;
