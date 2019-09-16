/** @format */

type Row = number[];

type Matrix = Row[];

export const exchangeRows = (
    matrix: Matrix,
    row1: number,
    row2: number,
): Matrix => {
    return matrix.map((row, index) => {
        if (index === row1) {
            return matrix[row2];
        }
        if (index === row2) {
            return matrix[row1];
        }
        return row;
    });
};

export const judgeExchange = (arr1: Row, arr2: Row): boolean => {
    const prime1 = arr1.indexOf(0);
    const prime2 = arr2.indexOf(0);
    return prime1 > prime2;
};

export const exchangeMatrixRows = (matrix: Matrix): Matrix => {
    const primes = matrix.map(row => {
        const index = row.findIndex(num => num !== 0);
        return [index, row[index]].concat(row);
    });
    const sorted = primes.sort((row1: Row, row2: Row) => {
        if (row1[0] < row2[0]) {
            return -1;
        }
        if (row1[0] > row2[0]) {
            return 1;
        }
        if (row1[1] === -1) {
            return row1[2] - row2[2];
        }
        return row1[1] - row2[1];
    });
    return sorted.map(row => row.slice(2));
};

export const exchangeStepMatrix = (matrix: Matrix): Matrix => {
    return matrix;
};

export const simplificationTrapezoidalMatrix = (matrix: Matrix): Matrix => {
    return matrix;
};

const calculateMatrix = (augmentedMatrix: Matrix): number[] | null => {
    const rowExchangedMariax = exchangeMatrixRows(augmentedMatrix);
    const stepMatrix = exchangeStepMatrix(rowExchangedMariax);
    const simplyMatrix = simplificationTrapezoidalMatrix(stepMatrix);
    return simplyMatrix.map(item => item[0]);
};
