thereza
=======

ExtJS4 + Sencha CMD

структура (на примере страницы поиска)
======================================

источники приложения
--------------------
/search/app
во время разработки можно отлаживать с помощью /search/index.html (все файлы загружаются отдельно, нет кэширования, но
нужно не забывать делать sencha app refresh, если добавляются новые компроненты требующие стилей)

сбилженные приложения
---------------------

/build/search/testing      собранные каждый в один файл стили и js-код, без минификации
/build/search/production   собранные каждый в один файл стили и js-код, Yui Compressor

для сборки:
    sencha app build testing
или
    sencha app build production

Тема
----

тема просто унаследована от neptune
/packages/t2theme




