//Median of given two arrays

function findmedian(a, n1, b, n2) {
    let i = 0;
    let j = 0;
    let k;
    let m1 = -1, m2 = -1;

    for (k = 0; k <= (n1 + n2) / 2; k++) {
        if (i < n1 && j < n2) {
            if (a[i] < b[j]) {
                m2 = m1;
                m1 = a[i];
                i++;
            }
            else {
                m2 = m1;
                m1 = b[j];
                j++;
            }
        }

        else if (i == n1) {
            m2 = m1;
            m1 = b[j];
            j++;
        }

        else if (j == n2) {
            m2 = m1;
            m1 = a[i];
            i++;
        }
    }

    if ((n1 + n2) % 2 == 0) {
        return (m1 + m2) * 1.0 / 2;
    }


    return m1;
}

let a = [1, 2];
let b = [7];
let n1 = a.length;
let n2 = b.length;

console.log(findmedian(a, n1, b, n2));