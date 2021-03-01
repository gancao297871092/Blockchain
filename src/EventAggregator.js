import { GUID } from '@/utils/random'

export default EventAggregator = {
    //on事件
    onAggregator: {},
    //one事件
    oneAggregator: {},
    on: function (key) {
        if (this.onAggregator[key] === undefined)
            this.onAggregator[key] = []

        const args = [].concat(Array.prototype.slice.call(arguments, 1))

        let instance = { instanceId: GUID(), handle: args[0] }
        this.onAggregator[key].push(instance)

        return instance.instanceId
    },
    one: function (key, fn) {
        if (this.oneAggregator[key] === undefined)
            this.oneAggregator[key] = []

        this.oneAggregator[key].push(fn)
    },
    //注销事件
    off: function (key, instanceId) {
        for (let aggregator of ["onAggregator", "oneAggregator"]) {
            if (!this[aggregator][key]) continue
            this[aggregator][key].forEach(function (item, index, arr) {
                if (item.instanceId == instanceId)
                    arr.splice(index, 1)
            })
            if (this[aggregator][key].length < 1) delete this[aggregator][key]
        }
    },
    //触发器
    trigger: function () {
        if (arguments.length == 0) return void 0

        let key = arguments[0]
        let args = [].concat(Array.prototype.slice.call(arguments, 1))

        if (this.onAggregator[key] !== undefined && this.onAggregator[key].length > 0)
            for (let i in this.onAggregator[key])
                this.onAggregator[key][i].handle(...args)

        if (this.oneAggregator[key] !== undefined && this.oneAggregator[key].length > 0) {
            for (let i in this.oneAggregator[key]) {
                this.oneAggregator[key][i].apply(null, args);
                this.oneAggregator[key][i] = undefined;
            }
            this.oneAggregator[key] = [];
        }
    },
    offAll: function () {
        this.onAggregator = {}
        this.oneAggregator = {}
    }
}