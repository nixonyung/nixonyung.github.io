<script lang="ts" module>
  export const flashcardSettings = $state(
    initSettings({
      words: {
        pronouns: {
          me: { paramKey: "me", defaultValue: true },
          you: { paramKey: "you", defaultValue: true },
          us: { paramKey: "us", defaultValue: true },
          thatPerson: { paramKey: "thatPerson", defaultValue: true },
          thosePeople: { paramKey: "thosePeople", defaultValue: true },
          thatThing: { paramKey: "thatThing", defaultValue: true },
          thoseThings: { paramKey: "thoseThings", defaultValue: true },
          reflective: { paramKey: "reflectiveProns", defaultValue: true },
          indefinite: { paramKey: "indefiniteProns", defaultValue: true },
          interrogativeWho: { paramKey: "who", defaultValue: true },
          interrogativeWhat: { paramKey: "what", defaultValue: true },
        },

        nouns: {
          people: {
            byCharacteristics: {
              generic: { paramKey: "genericPeople", defaultValue: true },
              gender: { paramKey: "gender", defaultValue: true },
              age: { paramKey: "age", defaultValue: true },
              professions: { paramKey: "professions", defaultValue: true },
              socialStatus: { paramKey: "socialStatus", defaultValue: true },
            },
            byRelationships: {
              immediateFamily: {
                parents: { paramKey: "parents", defaultValue: true },
                siblings: { paramKey: "siblings", defaultValue: true },
                spouses: { paramKey: "spouses", defaultValue: true },
                offsprings: { paramKey: "offspring", defaultValue: true },
                grandparents: { paramKey: "grandparents", defaultValue: true },
              },
              extendedFamily: { paramKey: "extFamily", defaultValue: true },
              chosenFamily: { paramKey: "chosenFamily", defaultValue: true },
              friends: { paramKey: "friends", defaultValue: true },
              fellows: { paramKey: "coworkers", defaultValue: true },
            },
          },

          animals: { paramKey: "animals", defaultValue: true },

          objects: {
            generic: { paramKey: "genericObjs", defaultValue: true },
            biological: { paramKey: "biologicalParts", defaultValue: true },
            nature: { paramKey: "nature", defaultValue: true },
            foodCuisine: { paramKey: "cuisine", defaultValue: true },
            foodDishes: { paramKey: "dishes", defaultValue: true },
            foodDrinks: { paramKey: "drinks", defaultValue: true },
            outfits: { paramKey: "outfits", defaultValue: true },
            equipments: { paramKey: "equipments", defaultValue: true },
            transportation: { paramKey: "infrastructure", defaultValue: true },
            arts: { paramKey: "arts", defaultValue: true },
          },

          moments: {
            timesOfDay: { paramKey: "timesOfDay", defaultValue: true },
            daysOfWeek: { paramKey: "daysOfWeek", defaultValue: true },
            daysOfMonth: { paramKey: "daysOfMonth", defaultValue: true },
            months: { paramKey: "months", defaultValue: true },
            seasons: { paramKey: "seasons", defaultValue: true },
            festivals: { paramKey: "festivals", defaultValue: true },
            misc: { paramKey: "miscMoments", defaultValue: true },
          },

          venues: {
            generic: { paramKey: "genericVenues", defaultValue: true },
            facilities: { paramKey: "facilities", defaultValue: true },
            shops: { paramKey: "shops", defaultValue: true },
            communities: { paramKey: "communities", defaultValue: true },
            regions: { paramKey: "regions", defaultValue: true },
            imaginary: { paramKey: "imagVenues", defaultValue: true },
          },

          ideas: {
            life: { paramKey: "life", defaultValue: true },
            socialConstructs: { paramKey: "socialConstructs", defaultValue: true },
            decisionMaking: { paramKey: "decisionMaking", defaultValue: true },
            narration: { paramKey: "narration", defaultValue: true },
            math: { paramKey: "math", defaultValue: true },
            science: { paramKey: "science", defaultValue: true },
            activities: { paramKey: "activitiesNouns", defaultValue: true },
            videoGames: { paramKey: "videoGames", defaultValue: true },
          },
        },

        verbs: {
          actions: {
            bodily: { paramKey: "bodily", defaultValue: true },
            intellectual: { paramKey: "intellectual", defaultValue: true },
            ownership: { paramKey: "ownership", defaultValue: true },
            transpositional: { paramKey: "transpositional", defaultValue: true },
            maneuvers: { paramKey: "maneuvers", defaultValue: true },
            activities: { paramKey: "activitiesVerbs", defaultValue: true },
          },
          descriptive: {
            being: { paramKey: "being", defaultValue: true },
            existence: { paramKey: "existence", defaultValue: true },
            processes: { paramKey: "processes", defaultValue: true },
          },
          changes: {
            environmenal: { paramKey: "environ", defaultValue: true },
            resultative: { paramKey: "resultative", defaultValue: true },
          },

          // TODO: move to functional and also include auxiliary adjs.?
          auxiliary: { paramKey: "auxiliary", defaultValue: true },
        },

        // adjectives
        // TODO: need to categorize?
        // The Royal Order of Adjectives (OSASCOMP)
        // When using multiple adjectives, they follow this specific order:
        // Opinion: Expresses subjective judgments or attitudes (e.g., beautiful, ugly, wonderful, difficult, delicious).
        // Size: Describes physical dimensions (e.g., large, small, tiny, tall, short).
        // Age: Describes how old something is (e.g., old, new, ancient, young, six-year-old).
        // Shape/Physical Quality: Describes form or other physical attributes (e.g., round, square, thin, rough, untidy).
        // Color: Describes the color or pattern (e.g., red, blue, pale, black-haired).
        // Origin: Describes where something is from (e.g., Italian, American, Chinese, Southern).
        // Material: Describes what something is made of (e.g., wooden, silk, metal, plastic).
        // Purpose: Describes what the noun is used for, often a noun functioning as an adjective (e.g., cooking in "cooking pot", running in "running shoes", tennis in "tennis shoes").
        // adjectives: { paramKey: "adjs", defaultValue: true },
        adjectives: {
          affections: { paramKey: "affections", defaultValue: true },
          sensations: { paramKey: "sensations", defaultValue: true },
          appearances: { paramKey: "appearances", defaultValue: true },
          skillfulness: { paramKey: "skillfulness", defaultValue: true },
          personalities: { paramKey: "personalities", defaultValue: true },
          descriptive: { paramKey: "descriptiveAdjs", defaultValue: true },
          chronological: { paramKey: "chronologicalAdjs", defaultValue: true },
          locational: { paramKey: "locationalAdjs", defaultValue: true },
          measurements: { paramKey: "measurements", defaultValue: true },
          miscellaneous: { paramKey: "miscAdjs", defaultValue: true },
        },

        functional: {
          adpositions: { paramKey: "adpositions", defaultValue: true },
          chronological: { paramKey: "chronological", defaultValue: true },
          locational: { paramKey: "locational", defaultValue: true },
          logical: { paramKey: "logical", defaultValue: true },
          enumerative: { paramKey: "enumerative", defaultValue: true },
          degree: { paramKey: "comparative", defaultValue: true },
          manner: { paramKey: "manner", defaultValue: true },
        },

        grammarRules: {
          conjugations: {
            stemForm: { paramKey: "stemForm", defaultValue: true },
            naiForm: { paramKey: "naiForm", defaultValue: true },
            passiveForm: { paramKey: "passiveForm", defaultValue: true },
            causativeForm: { paramKey: "causativeForm", defaultValue: true },
            imperativeForm: { paramKey: "imperativeForm", defaultValue: true },
            conditionalForm: { paramKey: "conditionalForm", defaultValue: true },
            potentialForm: { paramKey: "potentialForm", defaultValue: true },
            taForm: { paramKey: "taForm", defaultValue: true },
            teForm: { paramKey: "teForm", defaultValue: true },
            volitionalForm: { paramKey: "volitionalForm", defaultValue: true },
            misc: { paramKey: "miscConjugations", defaultValue: true },
          },
        },

        expressions: {
          appellations: { paramKey: "appellations", defaultValue: true },
          greetingsAndClosings: { paramKey: "greetNClose", defaultValue: true },
          softening: { paramKey: "softening", defaultValue: true },
          thanksAndApologies: { paramKey: "thanksNApologies", defaultValue: true },
          emphasis: { paramKey: "emphasis", defaultValue: true },
          agreeing: { paramKey: "agreeing", defaultValue: true },
          requests: { paramKey: "requests", defaultValue: true },
          offerings: { paramKey: "offerings", defaultValue: true },
          surprised: { paramKey: "surprised", defaultValue: true },
          misc: { paramKey: "miscExpr", defaultValue: true },
        },
      },

      enableTransitiveVerbs: { paramKey: "transitiveVerbs", defaultValue: true },
      enableIntransitiveVerbs: { paramKey: "intransitiveVerbs", defaultValue: true },

      enableGodanVerbs: { paramKey: "godanVerbs", defaultValue: true },
      enableIchidanVerbs: { paramKey: "ichidanVerbs", defaultValue: true },
      enableIrregularVerbs: { paramKey: "irregularVerbs", defaultValue: true },

      enableIAdjectives: { paramKey: "iAdjs", defaultValue: true },
      enableNaAdjectives: { paramKey: "naAdjs", defaultValue: true },
    }),
  );
</script>

<script lang="ts">
  import CheckboxInput from "@/components/CheckboxInput.svelte";
  import Highlighted from "@/components/Highlighted.svelte";
  import ReferencesList from "@/components/ReferencesList.svelte";
  import SettingsContainer from "@/components/SettingsContainer.svelte";
  import SettingsRow from "@/components/SettingsRow.svelte";
  import SettingsRows from "@/components/SettingsRows.svelte";
  import SettingsRowsBordered from "@/components/SettingsRowsBordered.svelte";
  import SettingsSection from "@/components/SettingsSection.svelte";
  import { initSettings, useSyncSettings } from "../../../../lib/settings.svelte";

  useSyncSettings(flashcardSettings);

  interface BooleanSetting {
    value: boolean;
  }
  interface BooleanSettings {
    [K: string]: BooleanSetting | BooleanSettings;
  }
  function isSetting(setting: BooleanSetting | BooleanSettings): setting is BooleanSetting {
    return setting.value !== undefined;
  }
  function settingsSome(settings: BooleanSetting | BooleanSettings, target: boolean): boolean {
    return isSetting(settings) ? settings.value === target : Object.values(settings).some((setting) => settingsSome(setting, target));
  }
  function setAllSettings(settings: BooleanSetting | BooleanSettings, val: boolean) {
    if (isSetting(settings)) {
      settings.value = val;
    } else {
      for (const setting of Object.values(settings)) {
        setAllSettings(setting, val);
      }
    }
  }
  function onclick(settings: BooleanSetting | BooleanSettings) {
    return () => setAllSettings(settings, settingsSome(settings, false));
  }

  const allVerbsDisabled = $derived(!settingsSome(flashcardSettings.words.verbs, true));
  const allAdjsDisabled = $derived(!settingsSome(flashcardSettings.words.adjectives, true));
</script>

<ReferencesList
  references={{
    Dictionaries: {
      "TAKOBOTO (English dictionary)": "https://takoboto.jp/",
      "Weblio (native dictionary)": "https://www.weblio.jp/",
    },
    Guides: {
      "Verb Conjugations": {
        "Verb Conjugation - Tofugu": "https://www.tofugu.com/japanese-grammar/verb-conjugation-groups/",
        "Japanese conjugation revision sheet - Wikipedia":
          "https://www.wikiwand.com/en/articles/Japanese_conjugation#/media/File:AMB_Japanese_Verbs.pdf",
      },
    },
    "Google Search with AI Overview": undefined,
  }}
/>

<SettingsContainer>
  <Highlighted onclick={onclick(flashcardSettings)}>(toggle all)</Highlighted>

  <SettingsSection>
    <SettingsRow>
      <Highlighted onclick={onclick(flashcardSettings.words.pronouns)}>Pronouns:</Highlighted>
    </SettingsRow>

    <SettingsRows>
      <SettingsRow>
        <CheckboxInput bind:checked={flashcardSettings.words.pronouns.me.value} label="I" />
        <CheckboxInput bind:checked={flashcardSettings.words.pronouns.you.value} label="You" />
        <CheckboxInput bind:checked={flashcardSettings.words.pronouns.us.value} label="We" />
      </SettingsRow>
      <SettingsRow>
        <CheckboxInput bind:checked={flashcardSettings.words.pronouns.thatPerson.value} label="That Person" />
        <CheckboxInput bind:checked={flashcardSettings.words.pronouns.thosePeople.value} label="Those People" />
      </SettingsRow>
      <SettingsRow>
        <CheckboxInput bind:checked={flashcardSettings.words.pronouns.thatThing.value} label="That Thing" />
        <CheckboxInput bind:checked={flashcardSettings.words.pronouns.thoseThings.value} label="Those Things" />
      </SettingsRow>
      <SettingsRow>
        <CheckboxInput bind:checked={flashcardSettings.words.pronouns.reflective.value} label="Reflective" />
        <CheckboxInput bind:checked={flashcardSettings.words.pronouns.indefinite.value} label="Indefinite" />
      </SettingsRow>
      <SettingsRow>
        <CheckboxInput bind:checked={flashcardSettings.words.pronouns.interrogativeWho.value} label="Who?" />
        <CheckboxInput bind:checked={flashcardSettings.words.pronouns.interrogativeWhat.value} label="What?" />
      </SettingsRow>
    </SettingsRows>
  </SettingsSection>

  <SettingsSection>
    <SettingsRow>
      <Highlighted onclick={onclick(flashcardSettings.words.nouns)}>Nouns:</Highlighted>
    </SettingsRow>

    <SettingsRows>
      <SettingsRow>
        <Highlighted onclick={onclick(flashcardSettings.words.nouns.people.byCharacteristics)}>People (by Characteristics):</Highlighted>

        <CheckboxInput bind:checked={flashcardSettings.words.nouns.people.byCharacteristics.generic.value} label="(generic)" />
        <CheckboxInput bind:checked={flashcardSettings.words.nouns.people.byCharacteristics.gender.value} label="Gender" />
        <CheckboxInput bind:checked={flashcardSettings.words.nouns.people.byCharacteristics.age.value} label="Age" />
        <CheckboxInput bind:checked={flashcardSettings.words.nouns.people.byCharacteristics.professions.value} label="Professions" />
        <CheckboxInput bind:checked={flashcardSettings.words.nouns.people.byCharacteristics.socialStatus.value} label="Social Status" />
      </SettingsRow>
      <SettingsSection>
        <SettingsRow>
          <Highlighted onclick={onclick(flashcardSettings.words.nouns.people.byRelationships)}>People (by Relationships):</Highlighted>
        </SettingsRow>

        <SettingsRows>
          <SettingsRow>
            <Highlighted onclick={onclick(flashcardSettings.words.nouns.people.byRelationships.immediateFamily)}
              >Immediate Family:</Highlighted
            >
            <CheckboxInput
              bind:checked={flashcardSettings.words.nouns.people.byRelationships.immediateFamily.parents.value}
              label="Parents"
            />
            <CheckboxInput
              bind:checked={flashcardSettings.words.nouns.people.byRelationships.immediateFamily.siblings.value}
              label="Siblings"
            />
            <CheckboxInput
              bind:checked={flashcardSettings.words.nouns.people.byRelationships.immediateFamily.spouses.value}
              label="Spouses"
            />
            <CheckboxInput
              bind:checked={flashcardSettings.words.nouns.people.byRelationships.immediateFamily.offsprings.value}
              label="Offsprings"
            />
            <CheckboxInput
              bind:checked={flashcardSettings.words.nouns.people.byRelationships.immediateFamily.grandparents.value}
              label="Grandparents"
            />
          </SettingsRow>
          <SettingsRow>
            <CheckboxInput
              bind:checked={flashcardSettings.words.nouns.people.byRelationships.extendedFamily.value}
              label="Extended Family"
            />
          </SettingsRow>
          <SettingsRow>
            <CheckboxInput bind:checked={flashcardSettings.words.nouns.people.byRelationships.chosenFamily.value} label="Chosen Family" />
            <CheckboxInput bind:checked={flashcardSettings.words.nouns.people.byRelationships.friends.value} label="Friends" />
            <CheckboxInput bind:checked={flashcardSettings.words.nouns.people.byRelationships.fellows.value} label="Fellows" />
          </SettingsRow>
        </SettingsRows>
      </SettingsSection>

      <SettingsRow>
        <Highlighted onclick={onclick(flashcardSettings.words.nouns.animals)}>Animals:</Highlighted>

        <CheckboxInput bind:checked={flashcardSettings.words.nouns.animals.value} label="(all)" />
      </SettingsRow>

      <SettingsRow>
        <Highlighted onclick={onclick(flashcardSettings.words.nouns.objects)}>Objects:</Highlighted>

        <CheckboxInput bind:checked={flashcardSettings.words.nouns.objects.generic.value} label="(generic)" />
        <CheckboxInput bind:checked={flashcardSettings.words.nouns.objects.biological.value} label="Biological Parts" />
        <CheckboxInput bind:checked={flashcardSettings.words.nouns.objects.nature.value} label="Nature" />
        <CheckboxInput bind:checked={flashcardSettings.words.nouns.objects.foodCuisine.value} label="Cuisine" />
        <CheckboxInput bind:checked={flashcardSettings.words.nouns.objects.foodDishes.value} label="Dishes" />
        <CheckboxInput bind:checked={flashcardSettings.words.nouns.objects.foodDrinks.value} label="Drinks" />
        <CheckboxInput bind:checked={flashcardSettings.words.nouns.objects.outfits.value} label="Outfits" />
        <CheckboxInput bind:checked={flashcardSettings.words.nouns.objects.equipments.value} label="Equipments" />
        <CheckboxInput bind:checked={flashcardSettings.words.nouns.objects.transportation.value} label="Transportation" />
        <CheckboxInput bind:checked={flashcardSettings.words.nouns.objects.arts.value} label="Arts" />
      </SettingsRow>
      <SettingsRow>
        <Highlighted onclick={onclick(flashcardSettings.words.nouns.moments)}>Moments:</Highlighted>

        <CheckboxInput bind:checked={flashcardSettings.words.nouns.moments.timesOfDay.value} label="Times Of Day" />
        <CheckboxInput bind:checked={flashcardSettings.words.nouns.moments.daysOfWeek.value} label="Days Of Week" />
        <CheckboxInput bind:checked={flashcardSettings.words.nouns.moments.months.value} label="Months" />
        <CheckboxInput bind:checked={flashcardSettings.words.nouns.moments.seasons.value} label="Seasons" />
        <CheckboxInput bind:checked={flashcardSettings.words.nouns.moments.festivals.value} label="Festivals" />
        <CheckboxInput bind:checked={flashcardSettings.words.nouns.moments.misc.value} label="(misc.)" />
      </SettingsRow>
      <SettingsRow>
        <Highlighted onclick={onclick(flashcardSettings.words.nouns.venues)}>Venues:</Highlighted>

        <CheckboxInput bind:checked={flashcardSettings.words.nouns.venues.generic.value} label="(generic)" />
        <CheckboxInput bind:checked={flashcardSettings.words.nouns.venues.facilities.value} label="Facilities" />
        <CheckboxInput bind:checked={flashcardSettings.words.nouns.venues.shops.value} label="Shops" />
        <CheckboxInput bind:checked={flashcardSettings.words.nouns.venues.regions.value} label="Regions" />
        <CheckboxInput bind:checked={flashcardSettings.words.nouns.venues.imaginary.value} label="Imaginary" />
      </SettingsRow>
      <SettingsRow>
        <Highlighted onclick={onclick(flashcardSettings.words.nouns.ideas)}>Ideas:</Highlighted>

        <CheckboxInput bind:checked={flashcardSettings.words.nouns.ideas.life.value} label="Life" />
        <CheckboxInput bind:checked={flashcardSettings.words.nouns.ideas.socialConstructs.value} label="Social Constructs" />
        <CheckboxInput bind:checked={flashcardSettings.words.nouns.ideas.decisionMaking.value} label="Decision-making" />
        <CheckboxInput bind:checked={flashcardSettings.words.nouns.ideas.narration.value} label="Narration" />
        <CheckboxInput bind:checked={flashcardSettings.words.nouns.ideas.math.value} label="Math" />
        <CheckboxInput bind:checked={flashcardSettings.words.nouns.ideas.science.value} label="Science" />
        <CheckboxInput bind:checked={flashcardSettings.words.nouns.ideas.activities.value} label="Activities" />
        <CheckboxInput bind:checked={flashcardSettings.words.nouns.ideas.videoGames.value} label="Video Games" />
      </SettingsRow>
    </SettingsRows>
  </SettingsSection>

  <SettingsSection>
    <SettingsRow>
      <Highlighted class="whitespace-nowrap" onclick={onclick(flashcardSettings.words.verbs)}>Verbs:</Highlighted>
    </SettingsRow>

    <SettingsRows>
      <SettingsRowsBordered>
        <SettingsRow>
          <CheckboxInput
            bind:checked={flashcardSettings.enableTransitiveVerbs.value}
            label="Transitive 他動詞"
            tooltip="usually use を"
            disabled={allVerbsDisabled}
          />
          <CheckboxInput
            bind:checked={flashcardSettings.enableIntransitiveVerbs.value}
            label="Intransitive 自動詞"
            tooltip="usually use が/は/に/で"
            disabled={allVerbsDisabled}
          />
        </SettingsRow>

        <SettingsRow>
          <CheckboxInput
            bind:checked={flashcardSettings.enableGodanVerbs.value}
            label="Godan 五段動詞"
            tooltip="conjugates by changing the vowel of the ending う/く/ぐ/す/つ/ぬ/ぶ/む/る"
            disabled={allVerbsDisabled}
          />
          <CheckboxInput
            bind:checked={flashcardSettings.enableIchidanVerbs.value}
            label="Ichidan 一段動詞"
            tooltip="conjugates by changing the ending る"
            disabled={allVerbsDisabled}
          />
          <CheckboxInput
            bind:checked={flashcardSettings.enableIrregularVerbs.value}
            label="Irregular 変格動詞"
            tooltip="ends with する / くる"
            disabled={allVerbsDisabled}
          />
        </SettingsRow>
      </SettingsRowsBordered>

      <SettingsRow>
        <Highlighted onclick={onclick(flashcardSettings.words.verbs.actions)}>Actions:</Highlighted>

        <CheckboxInput bind:checked={flashcardSettings.words.verbs.actions.bodily.value} label="Bodily" />
        <CheckboxInput bind:checked={flashcardSettings.words.verbs.actions.intellectual.value} label="Intellectual" />
        <CheckboxInput bind:checked={flashcardSettings.words.verbs.actions.ownership.value} label="Ownership" />
        <CheckboxInput bind:checked={flashcardSettings.words.verbs.actions.transpositional.value} label="Transpositional" />
        <CheckboxInput bind:checked={flashcardSettings.words.verbs.actions.maneuvers.value} label="Maneuvers" />
        <CheckboxInput bind:checked={flashcardSettings.words.verbs.actions.activities.value} label="Activities" />
      </SettingsRow>

      <SettingsRow>
        <Highlighted onclick={onclick(flashcardSettings.words.verbs.descriptive)}>Descriptive:</Highlighted>

        <CheckboxInput bind:checked={flashcardSettings.words.verbs.descriptive.being.value} label="Being" />
        <CheckboxInput bind:checked={flashcardSettings.words.verbs.descriptive.existence.value} label="Existence" />
        <CheckboxInput bind:checked={flashcardSettings.words.verbs.descriptive.processes.value} label="Processes" />
      </SettingsRow>

      <SettingsRow>
        <Highlighted onclick={onclick(flashcardSettings.words.verbs.changes)}>Changes:</Highlighted>

        <CheckboxInput bind:checked={flashcardSettings.words.verbs.changes.environmenal.value} label="Environmenal" />
        <CheckboxInput bind:checked={flashcardSettings.words.verbs.changes.resultative.value} label="Resultative" />
      </SettingsRow>

      <SettingsRow>
        <Highlighted onclick={onclick(flashcardSettings.words.verbs.auxiliary)}>Auxiliary:</Highlighted>

        <CheckboxInput bind:checked={flashcardSettings.words.verbs.auxiliary.value} label="(all)" />
      </SettingsRow>
    </SettingsRows>
  </SettingsSection>

  <SettingsSection>
    <SettingsRow>
      <Highlighted class="whitespace-nowrap" onclick={onclick(flashcardSettings.words.adjectives)}>Adjectives:</Highlighted>
    </SettingsRow>

    <SettingsRows>
      <SettingsRowsBordered>
        <SettingsRow>
          <CheckboxInput bind:checked={flashcardSettings.enableIAdjectives.value} label="い-adj." disabled={allAdjsDisabled} />
          <CheckboxInput bind:checked={flashcardSettings.enableNaAdjectives.value} label="な-adj." disabled={allAdjsDisabled} />
        </SettingsRow>
      </SettingsRowsBordered>

      <SettingsRow>
        <CheckboxInput bind:checked={flashcardSettings.words.adjectives.affections.value} label="Affections" />
        <CheckboxInput bind:checked={flashcardSettings.words.adjectives.sensations.value} label="Sensations" />
        <CheckboxInput bind:checked={flashcardSettings.words.adjectives.appearances.value} label="Appearances" />
        <CheckboxInput bind:checked={flashcardSettings.words.adjectives.skillfulness.value} label="Skillfulness" />
        <CheckboxInput bind:checked={flashcardSettings.words.adjectives.personalities.value} label="Personalities" />
        <CheckboxInput bind:checked={flashcardSettings.words.adjectives.descriptive.value} label="Descriptive" />
        <CheckboxInput bind:checked={flashcardSettings.words.adjectives.chronological.value} label="Chronological" />
        <CheckboxInput bind:checked={flashcardSettings.words.adjectives.locational.value} label="Locational" />
        <CheckboxInput bind:checked={flashcardSettings.words.adjectives.measurements.value} label="Measurements" />
        <CheckboxInput bind:checked={flashcardSettings.words.adjectives.miscellaneous.value} label="(misc.)" />
      </SettingsRow>
    </SettingsRows>
  </SettingsSection>

  <SettingsRow>
    <Highlighted onclick={onclick(flashcardSettings.words.functional)}>Functional Words:</Highlighted>

    <CheckboxInput bind:checked={flashcardSettings.words.functional.adpositions.value} label="Adpositions" />
    <CheckboxInput bind:checked={flashcardSettings.words.functional.chronological.value} label="Chronological" />
    <CheckboxInput bind:checked={flashcardSettings.words.functional.locational.value} label="Locational" />
    <CheckboxInput bind:checked={flashcardSettings.words.functional.logical.value} label="Logical" />
    <CheckboxInput bind:checked={flashcardSettings.words.functional.enumerative.value} label="Enumerative" />
    <CheckboxInput bind:checked={flashcardSettings.words.functional.degree.value} label="Comparative" />
    <CheckboxInput bind:checked={flashcardSettings.words.functional.manner.value} label="Manner" />
  </SettingsRow>

  <SettingsRow>
    <Highlighted onclick={onclick(flashcardSettings.words.expressions)}>Expressions:</Highlighted>

    <CheckboxInput bind:checked={flashcardSettings.words.expressions.appellations.value} label="Appellations" />
    <CheckboxInput bind:checked={flashcardSettings.words.expressions.greetingsAndClosings.value} label="Greetings and Closings" />
    <CheckboxInput bind:checked={flashcardSettings.words.expressions.softening.value} label="Softening" />
    <CheckboxInput bind:checked={flashcardSettings.words.expressions.thanksAndApologies.value} label="Thanks and Apologies" />
    <CheckboxInput bind:checked={flashcardSettings.words.expressions.emphasis.value} label="Emphasis" />
    <CheckboxInput bind:checked={flashcardSettings.words.expressions.agreeing.value} label="Agreeing" />
    <CheckboxInput bind:checked={flashcardSettings.words.expressions.requests.value} label="Requests" />
    <CheckboxInput bind:checked={flashcardSettings.words.expressions.offerings.value} label="Offerings" />
    <CheckboxInput bind:checked={flashcardSettings.words.expressions.surprised.value} label="Surprised" />
    <CheckboxInput bind:checked={flashcardSettings.words.expressions.misc.value} label="(misc.)" />
  </SettingsRow>

  <SettingsSection>
    <SettingsRow>
      <Highlighted onclick={onclick(flashcardSettings.words.grammarRules)}>Grammar Rules:</Highlighted>
    </SettingsRow>

    <SettingsRows>
      <SettingsSection>
        <SettingsRow>
          <Highlighted onclick={onclick(flashcardSettings.words.grammarRules.conjugations)}>Verb Conjugations:</Highlighted>
        </SettingsRow>

        <SettingsRows>
          <SettingsRow>
            <CheckboxInput bind:checked={flashcardSettings.words.grammarRules.conjugations.stemForm.value} label="Stem" />
          </SettingsRow>
          <SettingsRow>
            <CheckboxInput bind:checked={flashcardSettings.words.grammarRules.conjugations.naiForm.value} label="ない" />
            <CheckboxInput bind:checked={flashcardSettings.words.grammarRules.conjugations.passiveForm.value} label="Passive" />
            <CheckboxInput bind:checked={flashcardSettings.words.grammarRules.conjugations.causativeForm.value} label="Causative" />
          </SettingsRow>
          <SettingsRow>
            <CheckboxInput bind:checked={flashcardSettings.words.grammarRules.conjugations.imperativeForm.value} label="Imperative" />
            <CheckboxInput bind:checked={flashcardSettings.words.grammarRules.conjugations.conditionalForm.value} label="Conditional" />
            <CheckboxInput bind:checked={flashcardSettings.words.grammarRules.conjugations.potentialForm.value} label="Potential" />
          </SettingsRow>
          <SettingsRow>
            <CheckboxInput bind:checked={flashcardSettings.words.grammarRules.conjugations.taForm.value} label="た" />
            <CheckboxInput bind:checked={flashcardSettings.words.grammarRules.conjugations.teForm.value} label="て" />
          </SettingsRow>
          <SettingsRow>
            <CheckboxInput bind:checked={flashcardSettings.words.grammarRules.conjugations.volitionalForm.value} label="Volitional" />
          </SettingsRow>
        </SettingsRows>
      </SettingsSection>

      <SettingsRow>
        <CheckboxInput bind:checked={flashcardSettings.words.grammarRules.conjugations.misc.value} label="(misc.)" />
      </SettingsRow>
    </SettingsRows>
  </SettingsSection>
</SettingsContainer>
