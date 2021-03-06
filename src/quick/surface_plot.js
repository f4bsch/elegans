define([
    "components/stage",
    "quick/base",
    "charts/surface",
    "utils/utils"
],function(Stage, Base, Surface, Utils){

    function SurfacePlot(selection, options){
        selection.each(function(data){
            var stage = new Stage(this);
            stage.add(new Surface(data, options));
            stage.render();
        });
    }

    SurfacePlot.fill_colors = function(_){
        this.options.fill_colors = _;
        return this;
    };

    SurfacePlot.has_legend = function(_){
        this.options.has_legend = _;
        return this;
    };

    Utils.mixin(SurfacePlot, Base);

    return SurfacePlot;
});
