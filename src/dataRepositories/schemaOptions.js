export const getSchemaBaseOptions = () => ({
  toObject: {
    getters: true,
    versionKey: false,
    transform(_, { _id, ...ret }) {
      return { id: _id, ...ret };
    },
  },
});
