@extends('admin.layout.app')
@section('content')
    <section class="content-header">
        <h1>
            Create Main Processing
        </h1>
        <span class="breadcrumb"><a href='{{ url("/admin/processing") }}' class="btn btn-sm btn-primary"><i class="fa fa-arrow-circle-left"></i>&nbsp;&nbsp;Go To Create Main Processing</a></span>
    </section>
    <div class="content">
        <div class="box box-primary">
            <div class="box-body">
                <div class="row">
                {!! Form::open(array('url' => 'admin/processing/add','method'=>'POST')) !!}
                    <div class="form-group col-sm-6">
                        <label>Prefix</label>
                        <select name="prefix" class="form-control">
                            <option value="{{ MATERIAL }}">MATERIAL</option>
                            <option value="{{ TEXTILE }}">TEXTILE</option>
                            <option value="{{ FOOD }}">FOOD</option>
                        </select>
                    </div>
                    <div class="form-group col-sm-6">
                        <label>Main Classification</label>
                        <select name="main_classification" class="form-control">
                            <option value="0">Select Main Classification</option>
                            <option value="{{ 511 }}">5-1-1</option>
                            <option value="{{ 521 }}">5-2-1</option>
                            <option value="{{ 531 }}">5-3-1</option>
                            <option value="{{ 541 }}">5-4-1</option>
                            <option value="{{ 551 }}">5-5-1</option>
                            <option value="{{ 561 }}">5-6-1</option>
                        </select>
                    </div>
                    <div class="form-group col-sm-6">
                        {!! Form::label('main_process', 'Main Process:') !!} <span class="text-danger">*</span>
                        {!! Form::text('main_process', null, ['class' => 'form-control']) !!}
                        @if ($errors->has('main_process'))
                            <span class="text-danger">
                                <strong>{{ $errors->first('main_process') }}</strong>
                            </span>
                       @endif
                    </div>
                    <div class="form-group col-sm-6 mmtext">
                        {!! Form::label('sorting', 'Sorting:') !!} <span class="text-danger">*</span>
                        {!! Form::number('sorting', null, ['class' => 'form-control']) !!}
                        @if ($errors->has('sorting'))
                            <span class="text-danger">
                                <strong>{{ $errors->first('sorting') }}</strong>
                            </span>
                        @endif
                    </div>
                    <div class="form-group col-sm-6">
                        <label for="recommend">Recommend</label>
                        <input type="checkbox" value="1" id="recommend" name="recommend">  
                    </div>
                    {{--<div class="form-group col-sm-6">
                        <label for="main_classification">Main Classification</label>
                        <input type="checkbox" value="1" id="main_classification" name="main_classification">  
                    </div>--}}
                    <div class="form-group col-sm-12">
                       {!! Form::submit('Save', ['class' => 'btn btn-primary']) !!}
                       <a href="{{ url('admin/processing') }}" class="btn btn-default">Cancel</a>
                    </div>
               {!! Form::close() !!}
                </div>
            </div>
        </div>
    </div>
@endsection