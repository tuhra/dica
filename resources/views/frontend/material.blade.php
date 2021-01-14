@extends('frontend.layouts.app')
@section('content')
<main class="page_main_wrapper">
    <div style="height: 300px;"><img src="{{ asset('frontend/images/slide-01.jpg') }}" alt="" class="img-responsive" style="width: 100%;"></div>         
    <div class="container">    
        <div class="row">
            <div class="col-lg-12 mb-12">
                <div class="container-box" style="width: 100%;">
                    <p>{{trans('app.database_on_potential')}}</p>
                    <h1>
                      @if(MATERIAL == $category->prefix)
                        MATERIAL PRICESSING
                      @elseif(FOOD == $category->prefix)
                        FOOD PROCESSING
                      @else
                        TEXTILE
                      @endif
                    </h1>
                </div>
            </div>
        </div>
        <div class="row">
            <form method="GET" action="{{ url($category->id.'/search_result') }}">
            <div class="col-lg-12 mb-12">
                <div class="container-box">
                    <div class="input-group">
                      <label style="line-height: 30px; padding: 0px 20px 0px 0px;">{{trans('app.free_word_search_function')}}</label> 
                        <input type="text" name="q" class="form-control" placeholder="{{trans('app.search_for')}}" style="margin-right: 20px;">
                    </div>
                </div>
            </div>
            </form>
        </div>
        <!-- Marketing Icons Section -->
        <div class="row" style="margin-top: 20px;"> 
          @if(MATERIAL == $category->prefix)
            <div class="col-lg-6 mb-6">
                <h3>Main Processing Classification</h3>
                  @foreach($processings as $processing)
                    <a href="{{url($category->id.'/search_result?processing='. $processing->id)}}" class="list-group-item active">{{ $processing->main_process }}</a>
                  @endforeach
            </div>
            <div class="col-lg-6 mb-6">
                <h3><u>Recommand Products</u></h3>
                  @foreach($products as $recommand)
                    <a href="{{url($category->id.'/search_result?product=' . $recommand->id)}}" class="list-group-item">{{ $recommand->name }}</a>
                  @endforeach
                  {{--<h3><u>Products</u></h3>
                  @foreach($companies as $company)
                    @foreach($company->products as $product)
                      <a href="{{url($category->id.'/search_result?product=' . $product->id)}}" class="list-group-item">{{ $product->name }}</a>
                    @endforeach
                  @endforeach--}}
            </div>
            {{--<div class="col-lg-4 mb-4">
                <h3><u>{{trans('app.list_of_state_region')}}</u></h3>
              <div class="list-group">
                  @foreach($companies as $company)
                      @foreach($company->locations as $location)
                      <a href="{{url($category->id.'/search_result?location='. $location->id)}}" class="list-group-item">{{ $location->name }}</a>
                      @endforeach
                  @endforeach
              </div>
            </div>--}}
          @endif        
          @if(TEXTILE == $category->prefix)


            {{--<div class="col-lg-6 mb-6">
                <h3><u>Recommand Products</u></h3>
                  @foreach($recommands as $recommand)
                    <a href="{{url($category->id.'/search_result?product=' . $recommand->id)}}" class="list-group-item">{{ $recommand->name }}</a>
                  @endforeach
                  <h3><u>Products</u></h3>
                  @foreach($companies as $company)
                    @foreach($company->products as $product)
                      <a href="{{url($category->id.'/search_result?product=' . $product->id)}}" class="list-group-item">{{ $product->name }}</a>
                    @endforeach
                  @endforeach
            </div>--}}


            <div class="col-lg-6 mb-6">
                <h3>Main Processing Classification</h3>
                  @foreach($processings as $processing)
                    <a href="{{url($category->id.'/search_result?processing='. $processing->id)}}" class="list-group-item active">{{ $processing->main_process }}</a>
                  @endforeach
            </div>
            <div class="col-lg-6 mb-6">
                <h3><u>{{trans('app.list_of_state_region')}}</u></h3>
              <div class="list-group">
                  @foreach($locations as $location)
                  <a href="{{url($category->id.'/search_result?location='. $location->id)}}" class="list-group-item">{{ $location->name }}</a>
                  @endforeach
              </div>
            </div>
          @endif 

          @if(FOOD == $category->prefix)
            <div class="col-lg-6 mb-6">
                <h3>Main Products</h3>
                  @foreach($products as $product)
                    <a href="{{url($category->id.'/search_result?product=' . $product->id)}}" class="list-group-item">{{ $product->name }}</a>
                  @endforeach
            </div>
            <div class="col-lg-6 mb-6">
                <h3><u>{{trans('app.list_of_state_region')}}</u></h3>
              <div class="list-group">
                    @foreach($locations as $location)
                    <a href="{{url($category->id.'/search_result?location='. $location->id)}}" class="list-group-item">{{ $location->name }}</a>
                    @endforeach
              </div>
            </div>
          @endif
        </div>
        <!-- /.row -->         
    </div>
</main>
@endsection