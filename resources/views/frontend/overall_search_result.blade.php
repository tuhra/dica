@extends('frontend.layouts.app')
@section('content')
<main class="page_main_wrapper">
    <div style="height: 300px;"><img src="{{ asset('frontend/images/slide-01.jpg') }}" alt="" class="img-responsive" style="width: 100%;"></div>         
    <div class="container">    
        <div class="row">
            <div class="col-lg-12 mb-12">
                <div class="container-box" style="width: 100%;">
                    <h1>Database On Matching Service Program</h1><br>
                </div>

                <div class="container-box" style="width: 100%;">
                    <p>{{trans('app.search_result')}}</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12 mb-12">
                <div class="container-box">
                    <table class="table table-striped">
                      <thead class="thead-dark">
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col">{{trans('app.industry')}}</th>
                          <th scope="col">{{trans('app.name_of_company')}}</th>
                          <th scope="col">{{trans('app.state_region')}}</th>
                          <th scope="col">{{trans('app.main_processing')}}</th>
                          <th scope="col">{{trans('app.main_products')}}</th>
                          <th scope="col">{{trans('app.company_profile')}}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <?php $index=1;?>
                        @foreach($companies as $company)
                            <tr>
                                <th scope="row">{{$index}}</th>
                                <td>{{ $company->category->title }}</td>
                                <td><a href="{{ url($company->id.'/industry') }}">{{ $company->name }}</a></td>
                                <td>{{ main_location($company) }}</td>
                                <td>{{ main_processing($company) }}</td>
                                <td>{{ main_product($company) }}</td>
                                <td>{{ substr($company->strong_point,0,15) }}</td>
                            </tr>
                            <?php $index++;?>
                        @endforeach
                      </tbody>
                    </table>
                </div>
            </div>
        </div>
        <!-- /.row -->         
    </div>
</main>
@endsection