const languages = ['pl', 'ru', 'en']

export const getPathLanguages = () => 
    languages.map((language: string) => ({
            params: {
                locale: language,
            },
        }));    

