angular.module('mock.factory', [])
	.factory('newsFactory', function($q) {
		var res = {
					 	data: {
							rows: [
									{
										id: "test1",
										header: "test1",
										prevtext: "test1",
										text: "test1",
										dt: "test1",
										img: "test1",
										category: "test1"
									},
									{
										id: "test2",
										header: "test2",
										prevtext: "test2",
										text: "test2",
										dt: "test2",
										img: "test2",
										category: "test2"
									}
								]
						}
				};

		return {
			getNews: function(ajaxParams) {
				var data = angular.merge({}, {
					params: {
						filter: 'none',
						order: 'none'
					}
				}, ajaxParams);

				if (data.params.filter === 'testDataManager' && data.params.order === 'testDataManager') {
					res.data.rows[0].id = 'testDataManager';
				}

				if (data.id === 'testNewSingle') {
					res.data.rows[0].id = 'testNewSingle';
				}

				if (data.id === 'testUpdate') {
					res.data.rows[0].header = 'headerAfter';
				}
				
				/*var p = $q.defer();
				p.resolve(res)
				return p.promise; */

				return $q.when(res);
			},
			updateNews: function(data) {
				return $q.when({"status":true,"msg":"Edited successful id = "});
			},
			getStr: function() { return '1'}
		} 
	});

