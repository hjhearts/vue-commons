export default {
    name: 'MessageListItem',
    template:`<li>{{item.text}} - {{item.createdAt | datetime('MM/DD/YYYY')}}
    <button type="button" @click="deleteClick(item)">X</button></li>`,
    props:{
        item:{
            type:Object,
            required:true
        }
    },
    methods:{
        deleteClick(item){
            this.$emit('delete', item);
        }
    }
}