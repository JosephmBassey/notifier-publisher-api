const mongoose = require('mongoose');

const SubscriberSchema = mongoose.Schema({
  topic: { type: String, required: true, index: true },
  url: { type: String, required: true, index: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
}, { timestamps: true });
SubscriberSchema.methods.toJSON = function () {
  var tab = this.toObject();
  delete tab.__v;
  return tab;
};

const SubscriberModel = mongoose.model("Subscriber", SubscriberSchema);

export default  SubscriberModel;
