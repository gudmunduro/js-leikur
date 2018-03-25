﻿

class Map2 extends Map {

    sprite() {
        return 'testMap';
    }

    spawnLocation() {
        return -4800;
    }

    groundVertices() {
        return [-5395, -276, -5360, -270, -5328, -265, -5303, -257, -5281, -251,
                -5267, -246, -5244, -238, -5222, -219, -5209, -204, -5193, -187,
                -5177, -170, -5162, -156, -5135, -145, -5111, -133, -5091,
                -119, -5074, -113, -5056, -110, -5025, -106, -5008, -107,
                -4970, -110, -4944, -123, -4904, -150, -4878, -174, -4834,
                -193, -4814, -201, -4780, -195, -4753, -188, -4720, -175,
                -4691, -166, -4654, -178, -4613, -212, -4584, -260, -4567,
                -290, -4534, -298, -4498, -292, -4464, -279, -4443, -266,
                -4431, -249, -4417, -219, -4402, -204, -4377, -204, -4369,
                -191, -4350, -166, -4332, -146, -4290, -101, -4258, -79,
                -4216, -51, -4195, -15, -4163, 19, -4124, 48, -4084, 70,
                -4055, 90, -4021, 111, -3987, 123, -3943, 131,
                -3887, 127, -3860, 106, -3840, 79, -3818, 66,
                -3795, 52, -3778, 54, -3758, 55, -3746, 71,
                -3730, 83, -3706, 94, -3677, 100, -3648,
                96, -3629, 78, -3607, 45, -3594, 18,
                -3588, -10, -3580, -34, -3571, -57,
                -3561, -76, -3544, -83, -3519, -86,
                -3503, -84, -3480, -73, -3464, -58, -3454, -53, -3435, -38,
                -3426, -27, -3409, -10, -3390, 4, -3360, 7, -3339, 5, -3323,
                -9, -3316, -22, -3308, -37, -3294, -45, -3276, -44, -3260,
                -34, -3240, -24, -3211, -11, -3174, 2, -3141, 8, -3110, 5,
                -3077, 6, -3048, 6, -3025, 8, -3009, 15, -3001, 25, -2986,
                32, -2968, 39, -2949, 46, -2927, 51, -2902, 54, -2877, 54,
                -2854, 54, -2825, 56, -2798, 55, -2776, 54, -2735, 54, -2693, 54,
                -2648, 54, -2618, 53, -2589, 56, -2564, 51, -2541, 45, -2525, 36,
                -2514, 32, -2503, 27, -2473, 23, -2447, 28, -2434, 32, -2417, 34,
                -2404, 27, -2392, 23, -2376, 29, -2365, 38, -2351, 38, -2337, 36,
                -2320, 33, -2312, 26, -2314, 13, -2308, 0, -2299, -8, -2288, -16, -2274,
                -26, -2263, -32, -2257, -44, -2252, -54, -2234, -60, -2213, -61, -2193,
                -57, -2180, -55, -2155, -50, -2134, -38, -2120, -22, -2107, -8, -2094, 10,
                -2079, 28, -2054, 43, -2017, 51, -1976, 51, -1946, 39, -1943, 30, -1915,
                6, -1888, -11, -1854, -16, -1810, -13, -1779, 8, -1755, 35, -1715, 54,
                -1681, 52, -1647, 33, -1627, 11, -1592, -6, -1564, -20, -1545, -44, -1504, -55,
                -1477, -69, -1451, -76, -1418, -75, -1364, -68, -1320, -68, -1267, -63, -1199, -63, 
                -1165, -62, -1130, -71, -1101, -104, -1078, -157, -1062, -176, -1051, -192, -1037, -204,
                -1014, -222, -1002, -226, -981, -231, -950, -236, -928, -234, -893, -245, -868, -255, -839, 
                -270, -809, -275, -798, -270, -782, -253, -765, -247, -753, -251, -743, -258, -733, -258,
                -725, -253, -713, -253, -696, -266, -673, -270, -649, -269, -636, -263, -624, -253, -598,
                -245, -582, -247, -554, -258, -538, -264, -514, -270, -501, -269, -489, -264, -479, -255,
                -468, -241, -452, -236, -433, -239, -412, -238, -394, -247, -378, -252, -364, -260, -354,
                -269, -338, -280, -314, -291, -294, -302, -272, -303, -251, -292, -237, -278, -225, -264,
                -215, -258, -203, -261, -191, -268, -181, -275, -172, -286, -162, -299, -150, -321, -139, -346,
                -130, -365, -120, -382, -105, -400, -88, -410, -64, -412, -46, -408, -23, -405, -9, -394, -1, -373,
                3, -351, 5, -324, 6, -300, 7, -282, 6, -262, 9, -230, 8, -206, 8, -180, 11, -150, 14, -116, 22, -86, 30,
                -70, 34, -51, 41, -36, 64, -4, 93, 16, 127, 11, 155, 3, 181, 2, 203, 8, 241, 9, 273, 16, 291, 16, 320, 16,
                349, 16, 368, 17, 397, 17, 425, 16, 450, 15, 489, 14, 529, 12, 556, 1, 569, -10, 595, -18, 607, -22, 633,
                -25, 658, -17, 670, -10, 690, 5, 710, 8, 740, 10, 767, 2, 789, -12, 812, -19, 844, -17, 857, -13, 872, -4,
                881, 11, 903, 16, 926, 2, 952, -13, 979, -18, 996, -15, 1012, -6, 1026, 4, 1039, 12, 1055, 12, 1070, 15,
                1087, 17, 1124, 16, 1156, 19, 1195, 21, 1234, 23, 1271, 26, 1307, 24, 1352, 24, 1385, 22, 1417, 23, 1467,
                18, 1494, 17, 1525, 15, 1564, 11, 1607, 5, 1654, -5, 1690, -7, 1718, -12, 1753, -16, 1784, -21, 1808, -21,
                1831, -22, 1865, -31, 1881, -36, 1900, -43, 1914, -57, 1923, -82, 1938, -114, 1947, -138, 1975, -146,
                1988, -146, 1998, -153, 2003, -163, 2008, -174, 2011, -186, 2017, -187, 2028, -188, 2042, -192, 2055,
                -197, 2064, -202, 2081, -208, 2094, -213, 2103, -220, 2114, -226, 2129, -237, 2147, -246, 2160, -248,
                2182, -252, 2182, -252, 2206, -255, 2231, -253, 2244, -253, 2265, -248, 2275, -243, 2292, -235, 2312,
                -232, 2343, -230, 2363, -229, 2379, -230, 2397, -234, 2412, -228, 2424, -218, 2439, -207, 2447, -203,
                2461, -203, 2474, -202, 2493, -197, 2522, -198, 2541, -199, 2576, -197, 2611, -200, 2645, -200, 2679,
                -198, 2705, -205, 2730, -210, 2747, -199, 2768, -197, 2793, -200, 2808, -204, 2821, -210, 2839, -208,
                2841, -201, 2857, -209, 2865, -196, 2872, -196, 2887, -201, 2899, -206, 2902, -202, 2921, -202, 2940,
                -200, 2981, -196, 3011, -196, 3029, -194, 3047, -197, 3059, -201, 3063, -192, 3088, -199, 3093, -193,
                3102, -195, 3112, -188, 3120, -183, 3137, -192, 3142, -187, 3155, -193, 3169, -201, 3180, -213, 3198,
                -226, 3209, -236, 3220, -236, 3226, -230, 3234, -219, 3240, -204, 3250, -183, 3263, -182, 3274, -195,
                3279, -208, 3296, -221, 3309, -222, 3333, -224, 3359, -224, 3382, -223, 3402, -220, 3414, -210, 3415,
                -203, 3414, -193, 3409, -186, 3400, -180, 3397, -173, 3390, -170, 3385, -168, 3405, -165, 3443, -170,
                3488, -179, 3522, -181, 3552, -185, 3589, -185, 3638, -186, 3696, -192, 3753, -193, 3816, -190, 3874, -181,
                3913, -166, 3953, -168, 3985, -181, 3993, -184, 4011, -170, 4024, -160, 4057, -174, 4070, -162, 4104, -161,
                4136, -164, 4145, -153, 4172, -152, 4204, -163, 4217, -141, 4255, -150, 4276, -131, 4300, -120, 4320, -91,
                4339, -69, 4360, -40, 4364, -24, 4381, -10, 4385, 1, 4404, 16, 4417, 27, 4432, 38, 4456, 52, 4483, 64, 4511,
                70, 4537, 81, 4560, 86, 4585, 90, 4601, 95, 4601, -600]
    }

    color() {
        return "#f7844f";
    }

    starLocations() {
        return [
            {x: -4587.44, y: -100},
            {x: -100, y: -200}
        ];
    }

}