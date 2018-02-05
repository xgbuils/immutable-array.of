const test = require('tape')
const tapSpec = require('tap-spec')

const immutableArrayOf = require('./')

const array = Object.freeze([1, 2, 3, 4, 5])

test('.of', function (t) {
    t.test('the new object has an array property that is deep equal to parameter', function (st) {
        const result = immutableArrayOf(array)
        st.deepEqual(result.array, array)
        st.end()
    })
    t.test('the new object has an array property that is not the same reference as parameter', function (st) {
        const result = immutableArrayOf(array)
        st.notEqual(result.array, array)
        st.end()
    })
    t.test('the new object has an length property that is equal to array parameter length', function (st) {
        const result = immutableArrayOf(array)
        st.equal(result.length, array.length)
        st.end()
    })

    t.end()
})

test.createStream()
    .pipe(tapSpec())
    .pipe(process.stdout)
