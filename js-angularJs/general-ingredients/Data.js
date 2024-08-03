upload.controller('Load_Data_Controller', function($rootScope, $scope, $http, $location, $cookies, $routeParams) {



        //01. Setting source 

        $rootScope.optionsModelTheme = {

            value_selected: '2'
        };


        // C-02.Set giá trị nhận vào đầu tiên của option

        $rootScope.optionsModelQuantity = {
            Page: 1,
            PageSize: '6'

        };
        // Set giá trị cho đầu ra của setting view data(ko xoá)
        $rootScope.optionsModelDisplay = {

            hienthi: ''
        };

        $rootScope.onChangePageSize = function(page_data) {

                $scope.DataBeginByPage = 0;
                var Title = "Success";
                var Message = "Cập nhật thành công !";
                var Type = "success";
                $scope.HQToast(Title, Message, Type);

                $scope.getDataPagination(page_data);

            }
            //01. End setting source


        $rootScope.getData_2 = function(page_data, page_function, option_value) {
                // code chỉnh sửa theo yêu cầu dự án

                var URL_API_Load = 'https://hqmultimedia.github.io/web-information-two-layout/Data/data-2.json';

                // "code cố định chỉ chỉnh sửa khi cần"
                // Hàm lấy tổng số tin 
                $http.get(URL_API_Load)
                    .then(function(res) {
                        // lấy tổng tin
                        $scope.data_get_2 = res.data;
                        console.log(res.data);



                    }); // kết thúc phần get data




            } // end $scope.getDataPagination(Hàm get data Pagination)
        $rootScope.getData_3 = function(page_data, page_function, option_value) {
                // code chỉnh sửa theo yêu cầu dự án

                var URL_API_Load = 'https://hqmultimedia.github.io/web-information-two-layout/Data/data-3.json';

                // "code cố định chỉ chỉnh sửa khi cần"
                // Hàm lấy tổng số tin 
                $http.get(URL_API_Load)
                    .then(function(res) {
                        // lấy tổng tin
                        $scope.data_get_3 = res.data;
                        console.log(res.data);



                    }); // kết thúc phần get data




            } // end $scope.getDataPagination(Hàm get data Pagination)
        $rootScope.getData_04 = function(page_data, page_function, option_value) {
                // code chỉnh sửa theo yêu cầu dự án

                var URL_API_Load = 'https://hqmultimedia.github.io/web-information-two-layout/Data/data-04.json';

                // "code cố định chỉ chỉnh sửa khi cần"
                // Hàm lấy tổng số tin 
                $http.get(URL_API_Load)
                    .then(function(res) {
                        // lấy tổng tin
                        $scope.data_get_04 = res.data;
                        console.log(res.data);



                    }); // kết thúc phần get data




            } // end $scope.getDataPagination(Hàm get data Pagination)
        $rootScope.getDataPagination = function(page_data, page_function, option_value) {
                // code chỉnh sửa theo yêu cầu dự án

                var URL_API_Load = 'https://hqmultimedia.github.io/web-information-two-layout/Data/data-posts.json';

                // "code cố định chỉ chỉnh sửa khi cần"
                // Hàm lấy tổng số tin 
                $http.get(URL_API_Load)
                    .then(function(res) {
                        // lấy tổng tin
                        $scope.data_get = res.data;
                        console.log(res.data);



                    }); // kết thúc phần get data




            } // end $scope.getDataPagination(Hàm get data Pagination)


        // Get dữ liệu đã xoá(bộ nhớ tạm)
        $rootScope.getDataBoxTrash = function(page_data, page_function) {
                // alert($rootScope.info[0].level);
                // alert(page_data);
                // code chỉnh sửa theo yêu cầu dự án

                if (page_data == 'posts') {
                    // var URL_API_Load = 'http://localhost/Angular2026/admin/CrudDataController/get_data_box_trash';
                    var URL_API_Load = 'http://localhost/FashionTemplateAdmin/Data/data-trash.json';
                }
                if (page_data == 'product') {
                    // var URL_API_Load = 'http://localhost/Angular2026/admin/CrudDataController/get_data_box_trash';
                    var URL_API_Load = 'http://localhost/FashionTemplateAdmin/Data/data-trash-product.json';
                }
                if (page_data == 'category') {
                    // var URL_API_Load = 'http://localhost/Angular2026/admin/CrudDataController/get_data_box_trash';
                    var URL_API_Load = 'http://localhost/FashionTemplateAdmin/Data/data-trash-category.json';
                }
                if (page_data == 'baner') {
                    // var URL_API_Load = 'http://localhost/Angular2026/admin/CrudDataController/get_data_box_trash';
                    var URL_API_Load = 'http://localhost/FashionTemplateAdmin/Data/data-trash-baner.json';
                }


                // "code cố định chỉ chỉnh sửa khi cần"
                // Hàm lấy tổng số tin 
                $http.get(URL_API_Load)
                    .then(function(res) {
                        // lấy tổng tin
                        $scope.data_get_box_trash = res.data;
                        console.log(res.data);



                    }); // kết thúc phần get data




            } // end $scope.getDataPagination(Hàm get data Pagination)
            // End get dữ liệu đã xoá(bộ nhớ tạm)

        // test 
        $rootScope.getDataOrder = function() {

                // code chỉnh sửa theo yêu cầu dự án


                var URL_API_Load = 'http://localhost/HQ-Tempalte-2026/Data/order.json';




                // "code cố định chỉ chỉnh sửa khi cần"
                // Hàm lấy tổng số tin 
                $http.get(URL_API_Load)
                    .then(function(res) {
                        // lấy tổng tin
                        $scope.data_get = res.data;
                        console.log(res.data);
                        chart.setData(res.data);



                    }); // kết thúc phần get data




            } // end $scope.getDataPagination(Hàm get data Pagination)

        $rootScope.getDataOrder_2 = function() {

                // code chỉnh sửa theo yêu cầu dự án


                var URL_API_Load = 'http://localhost/HQ-Tempalte-2026/Data/order.json';




                // "code cố định chỉ chỉnh sửa khi cần"
                // Hàm lấy tổng số tin 
                $http.get(URL_API_Load)
                    .then(function(res) {
                        // lấy tổng tin
                        $scope.data_get = res.data;
                        console.log(res.data);
                        chart_2.setData(res.data);



                    }); // kết thúc phần get data




            } // end $scope.getDataPagination(Hàm get data Pagination)
        $rootScope.LocationBaner = function() {

                // code chỉnh sửa theo yêu cầu dự án


                var URL_API_Load = 'http://localhost/FashionTemplateAdmin/Data/location_baner.json';




                // "code cố định chỉ chỉnh sửa khi cần"
                // Hàm lấy tổng số tin 
                $http.get(URL_API_Load)
                    .then(function(res) {
                        // lấy tổng tin
                        $scope.data_get = res.data;
                        console.log(res.data);




                    }); // kết thúc phần get data




            } // end $scope.getDataPagination(Hàm get data Pagination)

        // end test

    }) //End controller FunctionController