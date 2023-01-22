# worksharing_dapp
right now a repository with text refference for DAPPs related to collaborative work. do you have any recommendations?

Have a look at the Wiki Page: https://github.com/jfferson/worksharing_dapp/wiki

## to-do:

write a Python library and program for simmilarity search directly from regular user text documents.
The best projects providing the funcionalities for achieving it are Apache Tika, for handling the documents and flexsearch, for the simmilarity search.
Noticiably, those projects use different languages, Python or Java (Python will be better for the overall project) and Javascript (Node), so for achieving it I will use pyv8 to bridge to the Node side, after already having converted the user text document to the structured javascript document to be processed by flexsearch. After achieving it, it could be further enhanced by a digital ontology such as that provided by sigmakee, which also has a bridge to Python, as to allow search to be done not just based on simmilarity of words, but based on the senses themselves, that can involve multiple words
