// Vlastní české překlady pro Netlify CMS
const customCzechTranslation = {
    app: {
        header: {
            content: 'Obsah',
            workflow: 'Workflow',
            media: 'Média',
            quickAdd: 'Rychlé přidání',
        },
        app: {
            errorHeader: 'Chyba při načítání konfigurace CMS',
            configErrors: 'Chyby konfigurace',
            checkConfigYml: 'Zkontrolujte soubor config.yml.',
            loadingConfig: 'Načítání konfigurace...',
            waitingBackend: 'Čekání na backend...',
        },
        notFoundPage: {
            header: 'Nenalezeno',
        },
    },
    collection: {
        sidebar: {
            collections: 'Kolekce',
            searchAll: 'Hledat ve všem',
        },
        collectionTop: {
            sortBy: 'Seřadit podle',
            viewAs: 'Zobrazit jako',
            newButton: 'Nový %{collectionLabel}',
            ascending: 'Vzestupně',
            descending: 'Sestupně',
            searchResults: 'Výsledky vyhledávání pro "%{searchTerm}"',
            searchResultsInCollection: 'Výsledky vyhledávání pro "%{searchTerm}" v %{collection}',
            filterBy: 'Filtrovat podle',
        },
        entries: {
            loadingEntries: 'Načítání záznamů',
            cachingEntries: 'Ukládání záznamů do mezipaměti',
            longerLoading: 'Toto může trvat několik minut',
            noEntries: 'Žádné záznamy',
        },
    },
    editor: {
        editorControl: {
            field: {
                optional: 'volitelné',
            },
        },
        editorControlPane: {
            widget: {
                required: '%{fieldLabel} je povinné.',
                regexPattern: '%{fieldLabel} neodpovídá požadovanému vzoru: %{pattern}.',
                processing: '%{fieldLabel} se zpracovává.',
                range: '%{fieldLabel} musí být mezi %{minValue} a %{maxValue}.',
                min: '%{fieldLabel} musí být alespoň %{minValue}.',
                max: '%{fieldLabel} musí být %{maxValue} nebo méně.',
                rangeCount: '%{fieldLabel} musí mít mezi %{minCount} a %{maxCount} položek.',
                rangeCountExact: '%{fieldLabel} musí mít přesně %{count} položek.',
                minCount: '%{fieldLabel} musí mít alespoň %{minCount} položek.',
                maxCount: '%{fieldLabel} musí mít %{maxCount} nebo méně položek.',
                invalidPath: "'%{path}' není platná cesta",
                pathExists: "Cesta '%{path}' již existuje",
            },
        },
        editor: {
            onLeavePage: 'Opravdu chcete opustit tuto stránku?',
            onUpdatingWithUnsavedChanges: 'Máte neuložené změny, uložte je prosím před aktualizací stavu.',
            onPublishingNotReady: 'Před publikováním prosím aktualizujte stav na \"Připraveno\".',
            onPublishingWithUnsavedChanges: 'Máte neuložené změny, uložte je prosím před publikováním.',
            onPublishing: 'Opravdu chcete publikovat tuto položku?',
            onUnpublishing: 'Opravdu chcete zrušit publikování této položky?',
            onDeleteWithUnsavedChanges: 'Opravdu chcete smazat tuto publikovanou položku a všechny neuložené změny z aktuální relace?',
            onDeletePublishedEntry: 'Opravdu chcete smazat tuto publikovanou položku?',
            onDeleteUnpublishedChangesWithUnsavedChanges: 'Toto smaže všechny nepublikované změny této položky a také všechny neuložené změny z aktuální relace. Stále chcete smazat?',
            onDeleteUnpublishedChanges: 'Všechny nepublikované změny této položky budou smazány. Stále chcete smazat?',
            loadingEntry: 'Načítání položky...',
            confirmLoadBackup: 'Byla nalezena lokální záloha této položky, chcete ji použít?',
        },
    },
    ui: {
        errorBoundary: {
            title: 'Chyba',
            details: 'Došlo k chybě - prosím ',
            reportIt: 'nahlaste ji.',
            detailsHeading: 'Podrobnosti',
            recover: 'Obnovit',
            recoveryWarning: 'To může způsobit ztrátu neuložených dat.',
        },
        settingsDropdown: {
            logOut: 'Odhlásit se',
        },
        toast: {
            onFailToLoadEntries: 'Nepodařilo se načíst položku: %{details}',
            onFailToLoadDeployPreview: 'Nepodařilo se načíst náhled: %{details}',
            onFailToPersist: 'Nepodařilo se uložit položku: %{details}',
            onFailToDelete: 'Nepodařilo se smazat položku: %{details}',
            onFailToUpdateStatus: 'Nepodařilo se aktualizovat stav: %{details}',
            missingRequiredField: 'Jejda, některá povinná pole chybí. Před uložením je prosím vyplňte.',
            entrySaved: 'Položka uložena',
            entryPublished: 'Položka publikována',
            entryUnpublished: 'Položka nepublikována',
            onFailToPublishEntry: 'Nepodařilo se publikovat: %{details}',
            onFailToUnpublishEntry: 'Nepodařilo se zrušit publikování položky: %{details}',
            entryUpdated: 'Stav položky aktualizován',
            onDeleteUnpublishedChanges: 'Nepublikované změny smazány',
            onFailToAuth: '%{details}',
        },
    },
    workflow: {
        workflow: {
            loading: 'Načítání workflow záznamů',
            workflowHeading: 'Schvalovací Workflow',
            newPost: 'Nový příspěvek',
            description: '%{smart_count} položka čeká na schválení, %{readyCount} připraveno k publikování. |||| %{smart_count} položek čeká na schválení, %{readyCount} připraveno k publikování. ',
            dateFormat: 'D. M. YYYY',
        },
        workflowCard: {
            lastChange: '%{date} od %{author}',
            lastChangeNoAuthor: '%{date}',
            lastChangeNoDate: 'od %{author}',
            deleteChanges: 'Smazat změny',
            deleteNewEntry: 'Smazat novou položku',
            publishChanges: 'Publikovat změny',
            publishNewEntry: 'Publikovat novou položku',
        },
        workflowList: {
            onDeleteEntry: 'Opravdu chcete smazat tuto položku?',
            onPublishingNotReadyEntry: 'Pouze položky se stavem "Připraveno" mohou být publikovány. Přetáhněte prosím kartu do sloupce "Připraveno" pro umožnění publikování.',
            onPublishEntry: 'Opravdu chcete publikovat tuto položku?',
            draftHeader: 'Koncepty',
            inReviewHeader: 'V revizi',
            readyHeader: 'Připraveno',
            currentEntries: '%{smart_count} položka |||| %{smart_count} položek',
        },
    },
};

// Registrace vlastních překladů
CMS.registerLocale('cs', customCzechTranslation);