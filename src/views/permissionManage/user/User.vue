<template>
    <div class="role-list">
        <!--        toolbar-->
        <ToolBar class="toolbar">
            <Button type="primary" icon="md-add" class="button-col">新增</Button>
            <Button type="primary" shape="circle" icon="ios-search" class="button-col" style="float: right"></Button>
            <Input placeholder="请输入关键字搜索" class="input-col" style="float: right"></Input>
            <Select class="search-col" style="float: right">
                <Option value="name">name</Option>
                <Option value="age">age</Option>
                <Option value="address">address</Option>
            </Select>
        </ToolBar>
        <Table border :columns="columns" :data="data" size="small">
            <template slot-scope="{ row }" slot="name">
                <strong>{{ row.name }}</strong>
            </template>
            <template slot-scope="{ row, index }" slot="action">
                <Button type="default" size="small" style="margin-right: 5px" @click="show(index)">编辑</Button>
                <Button type="default" size="small" style="margin-right: 5px" @click="remove(index)">添加权限</Button>
                <Button type="default" size="small" @click="remove(index)">删除</Button>
            </template>
        </Table>
        <Page  show-sizer style="padding-top: 20px" @on-change="changepage" :total="dataCount" :page-size="pageSize" show-total :current="pageCurrent"/>
    </div>
</template>

<script>
	import ToolBar from "../../../components/ToolBar";

	export default {
		name: "User",
		data() {
			return {
				columns: [
					{
						title: 'Name',
						slot: 'name',
						// key:"name",
						render: (h, params) => {
							return h("router-link", {
								props: {
									type: 'primary',
									size: 'small',
									// to: "/UserManageDetail/"+params.row.name
									to: {
										path: "/UserManageDetail",
										query: {name: params.row.name}

									}
								},

								on: {
									click: () => {
										console.log(params);
									}
								}
							}, params.row.name)

						},
						className: 'nameClass'
					},
					{
						title: 'Age',
						key: 'age'
					},
					{
						title: 'Address',
						key: 'address'
					},
					{
						title: 'Action',
						slot: 'action',
						// width: 150,
						align: 'center'
					}
				],
				data: [
					{
						name: 'John Brown',
						age: 18,
						address: 'New York No. 1 Lake Park'
					},
					{
						name: 'Jim Green',
						age: 24,
						address: 'London No. 1 Lake Park'
					},
					{
						name: 'Joe Black',
						age: 30,
						address: 'Sydney No. 1 Lake Park'
					},
					{
						name: 'Jon Snow',
						age: 26,
						address: 'Ottawa No. 2 Lake Park'
					}
				],
				data6: [],//ajax请求出来的总数据 //实际接口不需要
				pageCurrent: 1,//当前页数
				dataCount: 50,//data6.length
				pageSize: 5,//每页显示多少条
				pageData: []//table绑定的数据
			}
		},
		methods: {
			show(index) {
				this.$Modal.info({
					title: 'User Info',
					content: `Name：${this.data[index].name}<br>Age：${this.data[index].age}<br>Address：${this.data[index].address}`
				})
			},
			remove(index) {
				this.data.splice(index, 1);
			}
			,
			onRowClick(data, index) {
				console.log(data);
			},
            changepage(index){//分页
							console.log(1)
			let _start = (index-1) * this.pageSize;
			let _end = index * this.pageSize;
			this.pageData = this.data6.slice(_start,_end);
		    }
		},
		components: {
			ToolBar
		}

	}
</script>

<style lang="scss">
    .ivu-table td.nameClass {
        color: #3c8dbc;
    }

    .toolbar {
        padding-bottom: 20px;

        .button-col {
            display: inline-block;
        }

        .search-col, .input-col {
            display: inline-block;
            width: 200px;
        }

    }

</style>