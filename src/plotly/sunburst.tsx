import Plot, { PlotParams } from "react-plotly.js";

type Datum = PlotParams["data"][number];

const csv = `Enzymatic-Flowery,Flowery,
Enzymatic-Fruity,Fruity,
Enzymatic-Herby,Herby,
Sugar Browning-Nutty,Nutty,
Sugar Browning-Carmelly,Carmelly,
Sugar Browning-Chocolatey,Chocolatey,
Dry Distillation-Resinous,Resinous,
Dry Distillation-Spicy,Spicy,
Dry Distillation-Carbony,Carbony,
Bitter-Pungent,Pungent,
Bitter-Harsh,Harsh,
Salt-Sharp,Sharp,
Salt-Bland,Bland,
Sweet-Mellow,Mellow,
Sweet-Acidy,Acidy,
Sour-Winey,Winey,
Sour-Soury,Soury,
Flowery-Floral,Floral,Enzymatic-Flowery
Flowery-Fragrant,Fragrant,Enzymatic-Flowery
Fruity-Citrus,Citrus,Enzymatic-Fruity
Fruity-Berry-like,Berry-like,Enzymatic-Fruity
Herby-Alliaceous,Alliaceous,Enzymatic-Herby
Herby-Leguminous,Leguminous,Enzymatic-Herby
Nutty-Nut-like,Nut-like,Sugar Browning-Nutty
Nutty-Malt-like,Malt-like,Sugar Browning-Nutty
Carmelly-Candy-like,Candy-like,Sugar Browning-Carmelly
Carmelly-Syrup-like,Syrup-like,Sugar Browning-Carmelly
Chocolatey-Chocolate-like,Chocolate-like,Sugar Browning-Chocolatey
Chocolatey-Vanilla-like,Vanilla-like,Sugar Browning-Chocolatey
Resinous-Turpeny,Turpeny,Dry Distillation-Resinous
Resinous-Medicinal,Medicinal,Dry Distillation-Resinous
Spicy-Warming,Warming,Dry Distillation-Spicy
Spicy-Pungent,Pungent,Dry Distillation-Spicy
Carbony-Smokey,Smokey,Dry Distillation-Carbony
Carbony-Ashy,Ashy,Dry Distillation-Carbony
Pungent-Creosol,Creosol,Bitter-Pungent
Pungent-Phenolic,Phenolic,Bitter-Pungent
Harsh-Caustic,Caustic,Bitter-Harsh
Harsh-Alkaline,Alkaline,Bitter-Harsh
Sharp-Astringent,Astringent,Salt-Sharp
Sharp-Rough,Rough,Salt-Sharp
Bland-Neutral,Neutral,Salt-Bland
Bland-Soft,Soft,Salt-Bland
Mellow-Delicate,Delicate,Sweet-Mellow
Mellow-Mild,Mild,Sweet-Mellow
Acidy-Nippy,Nippy,Sweet-Acidy
Acidy-Piquant,Piquant,Sweet-Acidy
Winey-Tangy,Tangy,Sour-Winey
Winey-Tart,Tart,Sour-Winey
Soury-Hard,Hard,Sour-Soury
Soury-Acrid,Acrid,Sour-Soury
Floral-Coffee Blossom,Coffee Blossom,Flowery-Floral
Floral-Tea Rose,Tea Rose,Flowery-Floral
Fragrant-Cardamon Caraway,Cardamon Caraway,Flowery-Fragrant
Fragrant-Coriander Seeds,Coriander Seeds,Flowery-Fragrant
Citrus-Lemon,Lemon,Fruity-Citrus
Citrus-Apple,Apple,Fruity-Citrus
Berry-like-Apricot,Apricot,Fruity-Berry-like
Berry-like-Blackberry,Blackberry,Fruity-Berry-like
Alliaceous-Onion,Onion,Herby-Alliaceous
Alliaceous-Garlic,Garlic,Herby-Alliaceous
Leguminous-Cucumber,Cucumber,Herby-Leguminous
Leguminous-Garden Peas,Garden Peas,Herby-Leguminous
Nut-like-Roasted Peanuts,Roasted Peanuts,Nutty-Nut-like
Nut-like-Walnuts,Walnuts,Nutty-Nut-like
Malt-like-Balsamic Rice,Balsamic Rice,Nutty-Malt-like
Malt-like-Toast,Toast,Nutty-Malt-like
Candy-like-Roasted Hazelnut,Roasted Hazelnut,Carmelly-Candy-like
Candy-like-Roasted Almond,Roasted Almond,Carmelly-Candy-like
Syrup-like-Honey,Honey,Carmelly-Syrup-like
Syrup-like-Maple Syrup,Maple Syrup,Carmelly-Syrup-like
Chocolate-like-Bakers,Bakers,Chocolatey-Chocolate-like
Chocolate-like-Dark Chocolate,Dark Chocolate,Chocolatey-Chocolate-like
Vanilla-like-Swiss,Swiss,Chocolatey-Vanilla-like
Vanilla-like-Butter,Butter,Chocolatey-Vanilla-like
Turpeny-Piney,Piney,Resinous-Turpeny
Turpeny-Blackcurrant-like,Blackcurrant-like,Resinous-Turpeny
Medicinal-Camphoric,Camphoric,Resinous-Medicinal
Medicinal-Cineolic,Cineolic,Resinous-Medicinal
Warming-Cedar,Cedar,Spicy-Warming
Warming-Pepper,Pepper,Spicy-Warming
Pungent-Clove,Clove,Spicy-Pungent
Pungent-Thyme,Thyme,Spicy-Pungent
Smokey-Tarry,Tarry,Carbony-Smokey
Smokey-Pipe Tobacco,Pipe Tobacco,Carbony-Smokey
Ashy-Burnt,Burnt,Carbony-Ashy
Ashy-Charred,Charred,Carbony-Ashy`.split("\n");

const ids = csv.map((row) => row.split(",")[0]);
const labels = csv.map((row) => row.split(",")[1]);
const parents = csv.map((row) => row.split(",")[2]);

const trace1: Datum = {
  type: "sunburst",
  ids,
  labels,
  parents,
};

const data = [trace1];

const layout = {
  title: "Sunburst Plot",
};

export const SunburstChart = () => {
  return (
    <Plot
      data={data}
      layout={layout}
      config={{ responsive: true }}
      className="chart-container"
    />
  );
};
