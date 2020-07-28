<template>
  <div class="content-body">
    <h1>
      Coronavirus: face à une hausse des infections, des nouvelles mesures de
      restrictions en Espagne, en Allemagne, en Belgique ou en Grèce
    </h1>
    <article class="article-main">
      <p>
        Limitation des rassemblements, déplacements restreints, port du masque
        obligatoire… De nombreux pays durcissent leurs mesures sanitaires pour
        tenter de freiner la pandémie de Covid-19, qui a fait plus de 650 000
        morts à travers le monde.
      </p>
      <p>
        Sept mois après son apparition en Chine, le nouveau coronavirus, pour
        lequel aucun vaccin n’a encore été trouvé, continue de circuler
        activement, alimentant les craintes d’une seconde vague aux enjeux
        économiques et sociétaux potentiellement désastreux.
      </p>
      <p>
        Selon le bilan établi par l’Agence France-Presse (AFP) à partir de
        chiffres officiels, mardi 28 juillet, plus de 16,5 millions de personnes
        ont été contaminées depuis la fin 2019 – dont près de 5 millions depuis
        le 1er juillet.
      </p>
      <p>
        En Europe, l’inquiétude est vive face à une épidémie qui semblait avoir
        été maîtrisée grâce à l’instauration de confinements stricts au
        printemps. En Allemagne, l’Institut de veille sanitaire Robert-Koch
        (RKI) s’est alarmé, mardi, de l’augmentation des nouvelles infections
        dans le pays depuis plusieurs jours (+ 557 par jour en moyenne depuis
        une semaine), source de « grandes inquiétudes ». Le RKI a conseillé le
        port du masque à l’extérieur si la distanciation physique s’avérait
        impossible à respecter.
      </p>
      <p>
        Pour le RKI, les voyages à l’étranger sont également en partie
        responsables du retour relatif de la pandémie. Le gouvernement allemand
        a ainsi déconseillé, mardi, les voyages « non essentiels » vers les
        régions espagnoles d’Aragon, de Catalogne et de Navarre en raison du «
        nombre élevé d’infections ». Depuis dimanche, la Grande-Bretagne soumet,
        elle, les passagers en provenance d’Espagne à une période d’isolement,
        une mesure critiquée par Madrid qui a riposté en assurant être un « pays
        sûr ».
      </p>
    </article>
    <aside class="aside-main">
      <Roomlio />
    </aside>
  </div>
</template>

<script>
import Roomlio from "../components/Roomlio.vue";

export default {
  components: {
    Roomlio,
  },
};
</script>

<style scoped>
.content-body {
  display: flex;
  align-items: flex-start;
}

.article-main {
  width: 40%;
}

.aside-main {
  width: 60%;
  padding: 16px;
}
</style>
