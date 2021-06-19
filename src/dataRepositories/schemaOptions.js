export const getSchemaBaseOptions = () => ({
  toObject: {
    getters: true,
    versionKey: false,
    transform(_: any, { _id, ...ret }: any) {
      return { id: _id, ...ret };
    },
  },
});
