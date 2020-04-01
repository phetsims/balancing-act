/* eslint-disable */
const mipmaps = [
  {
    "width": 137,
    "height": 203,
    "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIkAAADLCAYAAABatLCuAAA2NklEQVR4AezBC3hchWHg+79nzplzzjykeeh5LFljaYxc/BpjEzBFtqgbiLrBJg2GdHdvkWmWr2wLJtzt3ZK0l/D1w7TbLgGyXZpsbmxIm1wCLcbkxuHhWLbcmAQbyw8lFpbksSWPnjOj0TzPnJnhjhK0VRxJlmTZHiH9fotYMKtESfYCdi5vSNeSLVyGKMluwA14ATu/MgS0AEO6lmzhKhNYMCOiJNuBe4BNgBuoJ8ciiVhlkcuJJnVi/NIQ0AQcBPboWtInSrIb2AHcYxKMbodFwiKJWCUTI6JaipimE03qxPilJuANYI+uJX3MskUsmDFRkncBjeuWllLptGGRRKYrFEsSimn0DcfoDkZJpTMtgLu6pNC+vNyJwyIzmVQ6Q/9wnK5ghM7+MDnP6VryS8yiRSy4IqIkPwZ8bXm5k1WVRZgEIzOVSmfoHAjjsMiUFpiZrpim88MT50ilM9t1LbmbWWJkwRXJZtLvGQXhjcFo4gvnB4fl0kIziklgJowGA0U2BaskMl19w3GO+foYTqR8wFPZTHqIWSKwYNpESXYD9wCbgHrAXlpoJpXOcrJrkE3LK7jWzviD9IXj5AwB94iSvFvXkkPMgkUsmBJRku1AI/CASTB6SwrMlBaaKS0w47DIjEilM7T1hFhVWcT1kEpn6B+O0xWM0NkfJmc38JSuJX1cgUUsmJQoyXbgMWBHaaHZXl1sp7qkkHwX03ROdg3Q2R8eAp7XteRXmaFFLJiQKMmPAU9WOG329UtLsUgi09E3HOdU1wAWSWSDR+V6CMWSHGnvIRRLtgCf07Wkj2laxILfIEqyG9jlsMj165aWUlpgZjpS6QynugbpHAizvNxJbbkDk2Dkejp2ro8zPcEhYLuuJfcwDUYW/BpRkr3AkeXlzuWblldglUSmIxRL8m7rBYwGA5uWV1DhtGE0GLjeVIcVq2SS+4fjX8BgPJ/NpFuYIiML/jdRku8BXt/gUe0rKlxMV2d/mAO/6GL1kmLWLy3FJBjJJw6LjGq3cD4QuQeD0Z7NpN9iCows+CVRkr3A6xs8qr26pJDp6uwPc8zXxx03LsFdVEC+UkwCqt3C+UDkVgxGdzaTfoPLMLIAUZLdwJENHtVeXVLIdHX2hznm6+N3VyyhyKaQ7xSTgGq3cD4Q8WIwhrOZ9HtMwsgCjIJwYHm5072iwsV0dfaHOebr43dXLMFhkZkrFJOAardwPhD5DAbj+Wwm3cIEDMxzoiQ/5rDI3nVLS5muvuE4R9r9/O6KJTgsMnONwyKzcXkFObtESfYyAQPzmCjJduDJdUtLma6YpnPoTDcbPCoOi8xckUpn6OwPM6q0wMy6paXkvC5Ksp1xGJjfHqtw2uylBWam6+CZbqqLC6kuKeRSfcNxjrT7OdLuJx8d8/XRNxxn1PJyJxVOmxvYxTgMzFOiJNuBHasrixgR03T2HGtnKk51DTJi3dJSRqXSGc70BNlzrJ1DZ7qxSibWuUvJNybByDp3KUfO+kmlM4za4CnHIon3iJJ8D5cwMk8ZBeELDov8hdWVxYw45uvDaZFRHVYmE4olOfzhRT6z2o1JMNLZH+Zk1yDvtfdgNBhYWeFig0eltNCM0WAgHzksMt2hCEk9Q2mhmRFGgwGHVaazP/wZoyB8I5tJJ/mYkXnKKAhPrq0qWe6wyMQ0nSPtPdxeuxiTYGQy/3r2IqWFZmJamkNt3QwnUlS6bNx+w2JqSuwUKBJzQWmhhYNnuql02lBMAiOskkgopsnDiZSczaTf4mMG5q97SgvNjDjZNUB1SSEWSWQynf1h+sJxOvvDRLUUG5dX8HtrlrK83IlJMDKXWCSR1ZXFHPP1Mdb6paXkPCZKspuPGZiHREmud1hkLJJITNPp7A+zurKYyznZNUCF08Y96zxs8KiUFpiZy1ZVFhFN6pzpCTLKIolUlxSS8yQfMzA/1ZcWmBlxxh+kuqQQiyQymZims2GZyqblFVgkkU+KDctUTnUNkkpnGLW6spicRlGS7eQYmJ/WWGSRvuE4nQNhVlcWczkWSaS0wMzVcKprkFAsyfVQWmCmpMDMobZuUukMIyySSIXTRk4jOUbmIaMg/HEgmnSf7Q1RZFNYXu5kNsU0HZNg5HJS6QyHP/Rzti9EgVmiyKZwPRTbFE51DdIdjKKYBDLZj7DKIucHh8uymfQ3DMxP3lQ68xSwp8JpYzZ1ByP88MQ5LieVzvBu6wWWqi6237mevnCciZzpCXKk3U8qneFqsEgiy8udhGJJzvQEOdLew8Ez3eR4RUm2G5ifvqRrya8C3tICM7Pl2Lk+jp3vJ5XOMJlQLMkbH3Rw641VPN14Fw0330B3MEIqneFSR9r9hLU0i0scvNt6gaulttyBSTCyqrKYTcsrKLYpLcB2wG5gHtK15G5+xe2wyFypVDrDwTPdpBct4tuP38tkYprOu60X2LzWwxP31zOizGFjbY1K50CYsY60+zEIAi88vIWnG+/CVWihsz/M1WASjCwvd9LZP4RFEhmIJLzAHl1L+gzMU6Ik11skkSuVSmd4t/UCS1UXLzy8hTKHjYmk0hkOnulm81oPT9xfz1j31q3ijD/IqCPtfgyCwAsPb8GqmBixbeMqTnYNcKm+4TjHzvVxpapLCunsD5NKZygtNJNTT46Becwqi0ymbzjOqa5BJpJKZ3i39QK33ljF0413YVVMjLAqJkKxJJc60t7DyqVlPHF/PZeqW+nGZpEJxZIcafdjEAReeHgLVsXEqIb1tdgsMt3BCGOd6hrgTE+QMz1BroRFEqlw2ugcCFNaYCHHS46BBeM60u7nvY4eOgfD9A3HuVQqneHd1gvcemMVT9xfz1hra1RCMY2xzvQESQNP3H8HE6lb4ebd1gsYBIEXHt6CVTFxqboVbrqCEUZ19odZZDTywsN3c6prkFQ6w5WodNroC8dxWCRyNpFjYMFvONLuxyAIfP/L/4Htd67n2Lk+xkqlM7zbeoFbb6ziifvruZS3RqVvOMaoVDrDqa5Bvnx/PVbFxES8NSom0cjO7XdhVUyMp+HmWrqDUUak0hlOdg3wyJbb8NaobF7roa0nxJUoLTTTHYzgsMjkeMkxMH95GceRdj8GQeCFh7dgVUxsq1uFJIl09ocZ9W7rBW69sYon7q9nPGtrVLqDUUYd8/Vxy/JKvDUqk1m22MW3H7+XMoeNiXhUF84CM6FYkraeEDdUFFO30s2I21e46egf4kpYJBGLJJJKZ8ixi5JsNzB/fY1LdAcj9EcSvPDwFqyKiVFfvr+ek10DjDh2rg9XoYVHttzGRDyqC2eBmb7hODFNp7M/zCNbb+Nyyhw2yhw2LqduhZuTXYOc6Qmy/c51jKpb6WaRYRExTedKWGWRmKZTWmgmx2tgHhIluZ5LpNIZjp7r44n778CqmBjLW6NyQ0UxB8900z0UZef2u7AqJiZTt8JNdyDCGX+QhptrKXPYmC0NN9fSHYywea0Hb43KWGtrVPrCca6EwywTiml8zG5gfnKLRgNjtfWEKHcVULfSzXjurVtFdzDCMrWIfe9/SEuHn8nUrXTTNxyncyDMtrpVzFRLh59dbx9j39E2ekMRRnhUFx7VxfY713Epj1pETNO5EibByIjSAgs5XgPzk3txoUJfOM6IVDrDmZ4gNkViItGkhlUx4VFdRBMaX979Fs2nfUzEW6MSiiVZUVWKR3UxXe3+AA8++xo7X2kimtA4fNrHfU9/l31H2xjxwsNbKHPYuJRHddE3HGM2CcxPhYJxEaM6B8JYTUaOd/gZTzSR4utv/ISdjXfhrVEZ0XBzLWUOG5PxqC4+c/MNzERPMELdyqVsv3Mdo9r9AR589jXW1qiUOWyMx6aYmG0G5iev02xCEY30Dcc54w/iKbYyEati4tuP34u3RmWUR3VhVUxMZm2NSsP6WmaibqWb7XeuYyyP6uLbj99LmcPGRKyKRDSpMxNH2v2M5bBI5GwyMI8popHO/iGy2SxOswnRaKA3FGE8ZQ4b0/XI1tuYbR7VxWQ8qouYpjMTfeE4nf1h+oZjOCwSomBkhIF5zGkx0dkfxu20MMImCfQGI3wSnekJEoolmUxM0+kKRhghCkZGGZjHCiSREYsLFUYoopGz/gCT2Xe0jVebT3EtNJ/2sePFN2k+7eNKpNIZTnUN4rDITKRvOI5JMBKKJekLx3GYJUYJzGM2WWBxoYJgXMSIAlmk3R9gIrvePsaut48yojcY4ZGtt3G1tHT4+crutxhxvMPP0413UbfSzUyc6hoklc4wmVhSp6TATHcwgkkwYhKM6OkMIwzMY4poxFNsZZRNFjh7cZCJ7Dvaxqh9R9u4ml5tPsVYu94+ykyk0hnO9AS5nJim47TImAQjJQVmRoRiGjkHDcxzimhklNNsot0fIJpIMZ7eYIRR0USKdn+Aq+V4h5+x2v0BZqKtJ0SZ04bDIjOZvuEYDouEwyLhtMiMZWB+GkroGcZTIIu0+weZimhC42qJJlLMhjM9QRrW12ISDEwmmtSxSCKhmEZJoZmxDMxPJxJ6hvE4zSaOd/QwFR61iHzTG4owqjsYwVlgpsxp5XJimo7DIrPtUzdQWmBmRN9wjJwWAwt+jdNsoqXDz3jW1qiMKnPasComrpa1NSpjlTltTEVvMEJpoZkRXcEI2+pW0RuMUlpgYSJ9w3EcFplLpdJZcoYMzE++SDLNeATjIibyyNbbsComrIqJR7bcxtX0mZtvYKyG9bVMV3cwSt1KN9GExmRCsSQOi8SlQrEkupZsEpiffHomy3R5VBc//KvtXAsN62tpvxjg1eZTNNxcy/Y71zEdnf1hlpTYKXPYaPcHcFgkJhKKJXFYZMYKxZLk+MgRmJ9agvEU+e6RrbfxyNbbmInOgSEebPgUIyIJDZdiZSKhmEZ1iZ2xQjGNnBZyDMxDupYcIied+YhPomhSJ5ZKU7diKSPa/QFKC8yMJ5XOEIolKS0wM1bfcIycE+QYmL+ahjWd8UQSGrOhpcNPS4efay2m6TSsr8WqmGj3B7BIIhPpH45TWmjmUn3hODlN5BiYv1qC8RSXcppNtPsDXKl2f4Av736LSCLF9bBt4ypGnPUP4rDITKQrGKG0wMJYMU0npulDupZsIkdg/joRSaa5Gl5tPsWut4+yrW41dSvdXGvb71xPmcPGiJaOHpwWmYn0heMsX+5krK5ghJwmPiYwf7UMJ3XGUyCLtHT48daoTNfX3/gJza0+djbehbdG5Vorc9rYphYx6niHn5Wqk/H0DccZ4bDIjNUdjJDzBh8zME/pWrIloWeGEnqGsdKZj1BEIz2hCDPR7g/wyJbb8NaoXA9lDhtWxcSI3lCE3mCE0gIz4+nsH6LSaWOsmKbTF46Ts4ePGZjfWoLxFKMSeoafXQhikwV6g1FmwqO6ONzqIx8c7/BT4bQxnlQ6Q3cwynLVyVhdwQg5e3QtOcTHDMxvbwRjKUa1D0QZTuooopGWDj8zsW3jKva930a7P8D1dvi0j0qnjUuFYknebb2AwyJhkUTGOuMPkvMSYxiY35qC8RQjEnqGi+EEOb6EnuF4h5+ZKHPYeOIL9Tz64l5aOvxcL9FEiubTPiqcVlLpDO+2nmeURRIJxZKsqixmrO5ghJim+3QtuYcxDMxjupZsSeiZoUgyTX9EI2cP8HwilUERjbT7A8xEw/paHtl6G7vePsb10tx6jgqnjRHvtl5ANBoZ1dYTYkRpgZmxzvQEyXmKSxhYsKcvmiQYT5HzBrCnP6rhNJtoPu1jphrW1/L8w3dzvRw+7aPSaeNIew+hWJJKp40RMU3nZNcAimgkFEsyqm84Tl84PgTs4RIGFrzRH9EIxlPkNOla0qdnsj5ymk+fYy7qDUVoPu1jRHcwgkkwUuG0MuJIux+308KlTnUNkPO8riWHuISBeU7XknuGk/qQnsmia0kfv7Innf2Idn+A3lCE62Xf0TaeeaWJ6Wo+7aPCaeNk1wCKaKTCacUkGDnVNUhC0/EUWUnoGRwWmRGd/WH6wnGfriW/yjgEFozYA7j5Ny8F46nHFhcq7Hv/Q7bfuY5roTcU4XiHn8OnfRzv8BNNpKhb6Wa69r3fRiiWxLgIUtmPqC6x0zcc5xf+AJ9a4kQwLmJUKp3hZNcAOV9iAgILRrwEPMnHdC3ZgiT7RKPBve9oG9vvXMdkvv7GT/DWqNStdDNV7f4APcEI7f4ALR1+zvoHESSFjRs3ck/jn+A9f55d3/omT9x/B9PRG4rQ7g9gEozYLSaMRiMmo4F3Wy+wvNSGYFzEz84HGXWqa5CYpjfpWnIPExBYgK4lm0RJ3sqve17PZL8WjifZd7SNhvW1TOR4h59Xm08xwqO6sCkSEznrHySaSFFVVYW7qoqNGz/Db29bwpo1a1izejUjDh06xP/5X/6Mbz9+L1bFxHQ0n/YxQi2Q6YskubGiiCPtPagFMosLFX52PkgwnmoqLTTX9w3HOdMTHAK2MwmBBb+ka8kv8ev2XAwnvnZThYOvv/ET6lYsxaqYGM+Xv3AHDz77Gu//7KeEh4aYzOo1a7AXFjKRl7/zHf7Ln/0ZT3yhHo/qYrr2vd9GgSyiiEYyH0FnfxizsIjlpTbO9EUIxlMtwEGg/shZPzlP6VrSxySMLBhXNpMeMgqC1yIJy1N6hnAixS3LKxmP02bGqkj81de/zaOP/Clr1qyhqqqKqqoqqqqqqKqqoqqqiqqqKmRZZjxD4TBf+cu/5K+f/iv+6711bPZ6mK5nXmnizPlePrXEyameMFo6g8ssskot5GI4wYf9kSHgc8BdMU336pnsHl1LfonLMLJgQkZB6EvomcabKh28c+o8JQ4ry9QixrOiqpQ2Xzf/9988R21tLbW1tUzVy9/5Dv/x//hDBjpa+bv/9HusqCpluna9fYw9P2nlt5cW0RdNcjGcYHGhwiq1kIvhBKf8YXI26FqyxSgIzwFDQEM2k05yGYtYMClRkg+sUgvrRYOBDwMxXnh4Cx7VxUSaT/v4+t6fUFq5lC13b2HTxjpWr1mDvbCQESdOniQ8NMSJkyc5eOgQhw4dosgssG3jKhrW1zIT+4628XevHuJTS5zYZIGD7QM4zSZWqYVcDCc45Q+Ts13XkrtFSa4HXgfu0LVkC1OwiAWTEiW5XhGNBzZ5irkYTnAulOCFh7fgUV1Mpvm0j8OtPnqDEY53+BlV5rRR7rBR5rThUV3UrXRT5rAxU/uOtvF3rx7iU0uc2GSB88E4ejaLp8jKxXCCU/4wOdt1LbmbHFGSdwEHdS25mylaxILLEiX5gKfYWu8psnIxnOBcKMHOxrvw1qhcT/uOtvF3rx7iU0uc2GSBEZFkGpsscDGc4JQ/TM52XUvuJkeUZDdwj64ln2MajCy4LKMgnI9o6cbyAhmn2YRxEbx04CRlThvL1CKuh2deaeIf9x/nU0uc2GSBUZJg4GI4wSl/eAjYoGvJH/GxbCY9lM2k32OajCy4rGwm7cNgdCf1rLe8QKZAFknoGX54rJ1oIsUtyyu5lp55pYl977fhXWzHaTEx1il/mPbB6BBwh64lW5gFRhZMiVEQDsZS6T9WTEa5QBbxh5OkMlnaLw5y9OxF6lYuxSQauZqiiRR//PXXOXEhg7ngBkLhLsoLFAyGRaQzH3G0K0R/VGsB1upa0scsMbJgSrKZdNIoCD8NxfVGSTDQGYgNZT/66EcFsrg8pWn8Y9MJVlSVUua0cTW0dPj546+/Tm8oSmHxrRRV3E0sPoh/0IckGPnZhSCxVHoIuEPXkr3MIiMLpiybSfswGBf1R7R64B+ALyX0zGcKZLFMLZD57qHTDMc1VlSVYhKNzIZoIsU3fvhTvvHDn/LI1tto9weQXHciiDYs9hWEh85yMTSEq+JzCCaHrMUvNBoFQclm0k3MEiMLpiWbSTcZBcELnAeSwK0RLe0WDQbWLLbz3ocX+cHRD7EqJpapRVyJfUfbeOqf9qOnM/zdf/o9ekMR3j0xgEttYJTFvoIC13oUazXmgloUW42cSvTUf/RRotEoCOFsJt3CFVrEgmkTJdkOHDAYFa+95HZkazW9nS9TboVVaiH9EY1f9A2zfEkpn7n5BhrW1zId+462sevtY4x4ZMtt1K100xuK8OCzr1FQsR3FWs3lRILHCPa8QzoVagK261rSxwwtYsG0iZK8S1LUxrLqP0QwORihJfwMnH+VIlOIVWohF8MJfjFoIJ0KUea0UbfCjbdGZW2NilUxMVY0keJ4h5/DrT6aT5+jzGFj28ZVNKyvZdSDz77GgP5bFFXczVRlMwnCA/9KsOedIWC7riX3MAOLWDAtoiTvkhS1UV32EAajwljZTAL/2W9iF4IE4ynMztsoFn/Bl79wB/veb6PdH+B4h58Ra2tUIgmNdn+AEWtrVLw1KnUr3XhUF2M980oTPz4doWL5DmYiEe2kt/NlspnEdl1L7maaFrFgykRJ3iUpaqO67CEMRoXxZDMJus48j2KtxuZaT2n2TZ5/+G7GiiZStPsHGeGtUZnMM6808ePTEdRlDxEL/xyTUo6kqEyXlvDjP/tNspnE53QtuYdpMLLgskRJthsF4XuSon5BXfYQBqPCRBYZRApc67A6vKRTIawffUjDzbWMZRKNlDltlDltTOaZV5r48ekIjvLfJdD9JrFwK+aCWkSTg+kSRBsmuZho6MStRkF4KZtJJ5kiAwsmJUqyHTggKeo96rKHMBgVLsdgVLhSz7zSxL732xgx2P0mNtd6qlb8OYq1mpmyFK5AsVa7gXuYBoEFExIl2Q4csDnXeUuq7uNaiCZSPPriXtr9AQSTg8KS27E51zFbCktuJxHt3AHsZooEFoxLlGQ7cMDmXOctqbqPmZCUco6f9DNV+462sevtYwxGBUqq7sPmXMdssxSuwGBUvKKEV9eSLUyBkQW/QZRkL3Dc5lznLqm6j5laZBCJh39OcQEsU4uYyL6jbXxl99u8e2IA2XUXJVX3ISkqV4ue7CeV6GnLZtLvMQVGFvwaUZK9wIHC4tvtxUt+nytlFG20tP6YhvW1mEQjo6KJFP90oIWv7H6LI+0fIbvuorjy95EUlastm00SC7fK2Uz6JabAyIL/TZRkL3CgpOo+u6O0ntlgkksYCvfy6oF3MYkCejrDvqMf8tQ/vcupiyL2xZ/HWf5pTHIJ14pocjDU1+TOZtJPMQVGFvySKMn1wL6SqvvsNuc6pqP7zPOIcgmiycF4LPYVLBJLaXp/Pz/8WSttfTL2xZ/HWf5pRJODa22RQSQe/jkffZQ4mM2kfVyGwAJESW4EdpVU3YfNuY7pyGYSaAk/irWaiUSCxwj2vIOklOMo/zSKtZrrzaSUoyX8XqCJyxCY50RJbjQYlV0lVduwFK5guhLRTiRF5VLZTILwwL8y1H8YSSmnpOo+FGs1+UIyq0SCx9YwBQLzmCjJjQajsktd9hCSojITqUQPsrWaUdlMgvDAvzLUfxhJKaes+g9RrNXkG5OikuNlCgTmKVGSHzMYla+pyx5CUlRmKhHpoLDkdtKpEMGed4gEj2FzrkNd9hCSopKvFGs1OV6mQGAeEiV5l8GoNKrLHkJSVK6Elugh3H+YRLQTm3MdVSv+HMHkYC4QTA4g5NW1ZAuTEJhnREneJZgcjWXVf4ikqMxUOhUi2PMO2UwCweSgasWfI5gczCWiyUE6FXIDLUzCwDwiSvIuSVEbK5fvQFJUroSeChEL/xxn+acpqboPweRgrjEpKjleLsPAPCFK8i5JURvVZQ9hMCpcKcVajbrsIYb6D5OIdjIXGQWFnCouw8A8IEryLklRG9VlD2EwKswWSVFRrNX0dr7MXCRbq8lxcxkCn3CiJO+SFLVRXfYQBqPCbIkEjxHseYdVlQoRi5nh4DFsznXMJQajTI6byxD4BBMleZekqI3qsocwGBVmQyR4jGDPO6yqVPiLP7odb41K82kfT373HWzOdcwlkqKS4+YyBD6hREneJSlqo7rsIQxGhXQqRCaTQFJUZiISPEaw5x1WVSr8xR/djrdGZVTdSjdF1p+gJfxIispcI0qyXdeSQ0xA4BNIlORdQKNgctB15nnSqRBWxYRVkegORhBMDhRrNYUltyMpKpOJBI8R7HmHImuaP/v9dTSsr2U8dSvc/Kj1MCVV9zGXKNZqEtFOL9DEBAQ+YURJ3gU0ljlt1K0w0HDzZjyqi7Ha/QH2vd/GvqMvkjFW4Cj/NIq1mrEiwWMEe96hyJrmz35/HQ3ra5lMw821/PNP/j8+iRbxCSFKciPw5Noa1X1v3SrqVrqZin1H29j19jEGowJFFXeTSvQwHDjKqkqFe+tWUbfSzVTdt/O7GFz/HsVazVwx2P0m4YHDT+la8qtMQGCOEyXZDrxe5rTVb79zHQ3ra5mOhvW1rK1RefTFN+ntfJm1NSrb77kdb43KdNWtcPP2mVYUazVzRTabIZvJMBmBue9Aw8213ke23IZVMTEdzad9/OhoG82nfTTcXMu2xlV4VBczVbfSzes/PUxRxd3ku2wmQU/HPxEJnsYoCoVMQmAOEyW50aO6vE/cX89UtXT4aT7to7nVx4htdat44v47sComrpS3RkU2xtASfiRFJZ/oWhBdC6JrQeLDZ4mGTmFRKlhc/rv0B5u9GXQmIjC37di2cRXjafcH6AlGaPcHaPcPEk2kON7hp8xpo26Fm52Nd+FRXcy2upVLeb+nE0lRuR7SqRCBi28RC3+IwSiTjF1klFkpx2AwochlLFHvRhSsJLV+LkdgjhIl2W1VTN5lahEtHX6Od/TQ7h+kJxih3R+gzGmj3GHDW6PirVFZprp4Wr0Lq2LiavLWlHPow04Ki2/nWkpEO4kEjhIJHsNqXkqp8xZGKKV3MQVuJiEwh4iSbAe8QD3wQDSR4sFnX2NtjYpHdXH7SjflDhveGpXrZW2NSizcxLWQzSSIBI8RCRxD1wYptNZSWbYVwWhhqmSphBw3kxDIc6Ik1wNbgXrAu7ZGxaO68Cx2sbZGpcxhI5+UOWyUOW1oCT+SojLbspkEsfDPiQ21Egu3YpYrKFCWYHXWc7UI5ClRku3A61bFVN+wvpa6lW68NSpzwTLVRVukB0lRmQ3pVIhEtJPYUCuxcCsm0YHNXI2zbCuC0cLVJpCHREn2Agcabq61P7LlNqyKibnEoxZx8rgfm3MdM5WIdhIbaiUZ7URL+DHLFViUCpxlWxGMFmaTSXQAoXpdSzYxDoE8I0qyHXi94eZa+xP31zMXra0p5//9SSvTpSX8hPsPEwv/HMEgI0sl2M0ezM56riaDwcRkBPLP6w0317qfuL+eucqqSOipEFOViHYS6nkHLd6N1byUxcV3Ihgt5AuBPCJK8lc9qqv+kS23MZf1BCOkUyEuJxHtJNTzDnqiD0fBKsrKbyUfCeQJUZLrrYrpyZ3b78KqmJhLookUza3naOnoofn0OeIak0qnQvSf/z5avBuHbRUFZbdyPQlGCzleoIlxCOSPrQ3raylz2Jgrmk/7ONzqY9/7bZhEBzZzNY7CBuL9+xihJfxIisqodCpEsOcdIsFjOApWUVK6BYPBxPUmChZy7ExAIH9461a6yXfNp30cbvXRfPocqbQFm7mayrKtCEYLo1yFNxGKtSGaHIxIp0IEe94hEjyG1VxNZdlWBKOFuUJgwWU1n/ZxuNVH8+lzWBWJ/iGN8qLNmEQH47Gaq4nEz9F//lXSqRC6NohZrqCybCuC0cJcI7DgN0QTKY53+Dnc6qP59DmsikTdCjcvPLwFj+rimVea2N/yHuVFmzEYTIyn1FnHcKwNq9mD2VnPXCaw4JdaOvwc7+ihpcPP8Q4/HtVFw821bKtbhUd1MdYT99cDTexv2c/ikgbGYzCYsNtWMYcUMgGBPBJJpLgWookUxzv8tPsDtHT4Od7hp8xpY22NymduvoGnG+/CqpiYzCNbbuPsxb30ht6j2HErc5lsKgVOeZmAQP5oafcH6utWurkaWjr8NJ/2cbzDT7s/wNoaFW+Nyr11q3jiC/WUOWxMh1Ux8cLDW3jwa68xHG2jwFrLJ5VA/ji472jbYx7VRd1KN1eqNxTheIefw6d9HO/wY1Uk6la4eXTrbXhrVGaDVTGxs/EuHn1xL/GkBbNcwSfRIvKIKMmNwJNWxeT2qC68S8spc1opc9hYZDCwCPCoRVgVEyPa/QGiCY0RPaEIvcEoLR1+zvoHGbG2RsVbo1K30k2Zw8bV0nzax1++fIDyos2YRAdzTVLrp2fw3SZdS97BOATyiK4ldwPukJbc8f7QsH1oOIpNkYgkNM52D1BR4iSWShNNpBhR5rRR7rAxylujcm/dKsqdNjyqi2ulbqWbB353Nd/Zf4jFJQ0YDCbmko/4iEw6bWcCAvmlcVlF8ZP313vZtLoGqyIx6k9e+Gc2rq7m/vq15KPtd66jNxThwMlmyos2M1eEwq0EQsf5iKydCRjIL0PRuEa5s4BIQmNET3CYP/yb7xJJaPy7W24knz2y5TYqXGkC4WPks2w2RSjcyrkL3yemB3BVfBpBNPmYwCLyz9eAx7jExtU1fLHhFpZVFJPPekMRHnz2NRT5JqzmavJJNHaeaPwCw5GzmAs8FFU0YC7wkIh24j/7jSZdS97BOATyixdoXFZRzKbVNaz1LOamZRX0BId55UALz/3LIf7+0c+Tz8ocNnY23sUj/3Mv2UwGRSlHFKxcD3o6SiLRQzR+gXiiB6NopbD4Fmo8/x5RcjJVAvnlnpuWVdj//tHPM1a5s4BlFUWcvTjAXOCtUXlkywae/5dmstksomBBklxIJidmpRxBsCIKVmaTlgqi6xG0VBAtFSSe6GGRwYi5wIOleB2ljlWIkpOZEMgvz31wtnvrf/1fP/DeX+9lRLmrgJ7AMP/PD3/KH/3eLczErrePsa1uFVbFxLVy36Y1dPSG+PHpCMVL7iU+3I6uBQhEPyQ+3M4IyeTEaJQQBCuiYGUsyeTEaJQYEU/0MFY2m0JLBRmR1AJksylEyYkoOTEXLMPmvJFiy2Ik82Jmg0B+ed2qSN5oQuO5fznE2e4BxjrbPQi3MG3Np8+xtqYcb43KtfTIlts4e3EvA8EPKKq4m0vFh9sZocUvkkknGGto+CyjZMtiDEYzo4xAUcHvMEKUnIiSk6tJIH/UlzsL6v/lqe2M52z3AP/5hX/m393yWyyrKGY6li0u4qw/gLdG5VqyKiZ2br+LB599jUhQxeZcx1jmAg8jzAUeftNnyBcG8kdLT3CYaEJjPB9eHMCmSCyrKGa6PKqLlg4/10OZw8bOxrsY7H4TLeFnLhLIH0PA7s89uavxpmUV3FBRzIiewDAfXhygJzDM/3z088zE2hqVV5tPcb14a1T+5LNreXHfy1Qu34HBqDCXGMgfbqDxpmUV3FBRzKhyVwE3eSoY8UF7NzPhUV1EExq9oQjXy7a6VXx6TQm9nS8z1wjkD7tVkfjL//hprIrEpW5atphXmlq4v34tM7FMLeJ4h5+G9bVcL49suY3jHa8x2P0mRRV3M1cYyR+9qXTG/frhU94LfSHOXhxkRE9wmA/au/nOu8dwlzrZuLqGmTjc6iMYSVC30s31EE2keOaVAwxG42jxC3xkKERSVPJBOhUiEjzmy2bSLzEOI/nljVQ688bZiwN9H5ztru8NRjjefpGeYIRNq6v5z1t+m5m60B9m39E2/sPvrOVaaz7tY8c/7KWqysFXHt7M0koXbx/Yj7ngBgTRxvWWToWIBI/5spn0S4xDIP+0AC3Ak3//6OeZLR7VRTSRot0fwKO6uBaiiRS73j7KD4+1saOxjlvXLGHErWuWcH9DkH/Z/yrqsocwGBXymYH8ZGeW2RQTI5pP+7gW2v0BHn1xL2f6BvjW09u4dc0SxvqDz3pZWyvQf/5V8p2B/OS9aVkFV0Pz6XNcbfuOtvHoi3u5+aYlPP14AxbFxHh2PFBHSUEPod53yWcG5gmPWsSIdn+A3lCEq+WZV5p4Ye9P+PLDm/mDz3qZjEUx8dgDdWjhg8TCreQrA/OEVTHxsT3Np33Mtt5QhAeffY0zvQN86+ltrLyhjKlYWuFkxwN19J9/lXQqRD4ykJ9aPjjbzVXyxr7325hNLR1+Hnz2NW78rVKe/8pWLIqJ6bh1zRI+W7+U3s6XyWYS5BsD+WmIq2dPuz9AbyjCbHi1+RRPvPQWf3TfLXxx2y3M1Be33cINlVkGu98k3xiYZ3QtOQTsaT7t40pEEymeeaWJVw6fZOfjDWze4OFKffnhzSiL2ggPHOZaSqdC5AwxAQPzRLs/QI6PX3lj3/ttzFRvKMKjL+6lOxzm+b/YytIKJ7PBopj4ysObSQTfIhHt5FpJp0LknGACBvJXywdnu5kt0YRGjo8cXUvubvcHhnpDEaarpcPPg8++xo2/VcrTjzdgUUzMpqUVTr647RZ6O18mnQqRDwzkryGurj2vHjrFdLzafIonXnqLP7rvFr647Rauls0bPHy2fim9nS+TzSS43gzkL9/ZiwPMlrP+ADk+/s1Lza0+piKaSPHMK028cvgkOx9vYPMGD1fbF7fdglqUZLD7Ta43A/nrfDSRYrZEEylyzvMxXUs29QYjvubTPibT7g/w6It76Q6Hef4vtrK0wsm1svPxBrLJU4QHDnM9GchfQx92DzBbWjr85LTw61463OpjIs2nfTz64l5u/K1Snn68AYti4lqyKCZ2Pt7AYPebJKKdXC8G8ldLNKExW876B8nx8et273u/jd5QhEvtevsYO79/gEcb6/jitlu4XpZWONnxQB29nS+TToW4Hgzkr6EPuweYDb2hCNFEakjXki2MoWtJH7B73/sfMiqaSLHjxTdp+kUnOx9v4NY1S7jeNm/wcMenFtPb+TLZTIJrzUD+aolraaKJFFfqeIefnCbG99K+o22MaOnwc9/Of8JZYmbn4w0srXCSL3Y8UMcNlVkGu9/kWjOSx4yC+NW9P/0FFwbClDttOG1mZuK15tO0+wPfyGbS73GJbCbtS+jZe9r9gbJ/bGrhi/fdwh98di0m0Ui+udVbxbvN/0oyZUS2LGG2JKOdJKKdB7OZdBPjMJLHstlM/V//zX9zGwuK+NuXXuf1wycZIYkCTpuZqfr63p8QTaSeyGbSvYzDKAhKMpP+zFOP3slNKxaTr0yikVW15bz14x9hlN2IJgezIRntJBHtPJjNpJsYh0CeW7N6NTsefZT//rd/y94332Tv3jd5/Nt7kQ1Z1taoeGvKKXfY8NaojKc3FKE3GEHXki1MbE9/IPq1EpeVfLe0wskXt93C1//xZdRlDyEpKlebwByy5e672XL33cA3OXHyJIcOHeLgoUN898hJzp9/E6tiYplaxFiRhEZOE5PQtaRPlOQ9+4+037Pld24k323e4OFcd4C3fvIq6rKHMBgVriaBOWrN6tWsWb2aR/70Txl1/vx5zp8/z1gv/I//QfveNw9yeS/t3d96z5bfuZG54IvbbqE/sJ9T516lrPoPuZoMfIJUVVWxceNGNm7cyMaNG9m4cSPnz58np4nL0LXknv5A1Hf6w17mih0P1FFS0MNg95tcTQY+wYbCYU6cOImuJZuYmpf2/riVucKimPjKH28mHfsZkeAxrhYD+a3e7XYzUydPnCCnhal77r2WC/QHoswVJS4rOx9voP/890lEO7kaDOQvOzlut5uZOniomZwmpkjXkkPA7u/94DhzydIKJzseqKO382W0hJ/p0uJ+coaYgIH8YQeOAx8BB4An6+vruRKHDh0i5yDT89T+I+3EEinmks0bPNzfsJzezpfJZhJMRzaTIKeFCRjIH/dUFlm8KyrtlBTK9ZJofMzr9XIlDh46RE4L06BrSR+we+/+nzPX/MFnvWxa58J/9ptkMwlmi4H8sabSZeG22hLCcZ3baovx+XzM1ImTJ8nx6VrSx/S9tPfHrcQSKeaaHQ/UsbZWwH/2m0yVngqRM8QEDOSP+ooiMwVmEU3PUFwoMzQ0xEwdOnSInBZmQNeSTbF4qmnv/p8zF+14oA61KEn/+e8zFelUCF1LtjABA/nBDnhLCmT6w0kKzCJX6sSJk+QcZOae2vvjVmKJFHONRTGx8/EGiiznON/614R63yUWbmU86VSInCEmYSA/NHrKbEiike5AjJICmYFwErfbzUwdPHSInBZmSNeSTbF4qmnv/p8zF1kUEzsfb+D/+qObuP3Giyj6Dzh38qv0n/8+WsLPKC3hJ6eFSQhcf/cAT95U42JEa9cQN1W76BqMscntZiaGwmHOnz+PriWbuDLb9/649dzmDR5KXFbmGoti4tY1S7h1zRJG9AeifO8Hx3nvxIukPypCS/ixFK4g5w0mIXDt2YF6YBNwT4FZdN+xspxKl4WuQIxwXGdFpZ0POgNs2rSJmTh54gQ5TVwhXUv6YrD7ez843rjjgTrmuhKXlR0P1LED2Pvjn/Ot7/uHYuHWJmA3kxC4+tyAF9gE1APekkIZT1kBNWU2SgplRmh6hh8dv8iKSjvtvRH6w0kOHjzIiPr6eqaj6eAhMum0HXgd+BLgY+ae2n+kvfEPPruWEpeVT4rqCic5LbqW/ByXsYjZVQ+4ATewCfAC9soiC5UuC8WFMpUuM5JoZER/OEl3IEZ/OMnAcJL+cBJJNFJSKKPpGfrDSdxuNwcOHMDtdnM5TU1NvPTSS+zevZsVlXY0PUN7b+Q54EtcAVGSv7rqhrInn368gU+K905cYOeL+5t0LXkHl7GI6bEDXqAeWAPYATvgJaekUEYSjVS6LBQXyhQoIiWFMiM0PUP/cJLuwThdgRhdgzEKzCIlBTIlhQoVRWZKCmQk0ciorkCMDzoCtPdG8Hq91NfXs2bNGtxuN6MOHjyIz+djz549ZFMxVlY6WFFpp8As0hWI8f1/9Q0BDq6AKMl24NyXH95sv3XNEj4JvveDFr73g+NP6Vryq1zGIi7PDtwDbAXuKSmUqXBZKDSLtHYNsaLSzk3VLi6l6Rm6AnG6BmN0B2L0h5OUFMpUuCxUFlkoKZApMItMhaZn6ArEGQgn6Q8n0NJZRhUoIiWFMhUuCyWFMpf6X+9+yHBcvwNo4gqIktxY4rLu+tbT2/gk2PkP+3mv5cJ2XUvu5jIEJvdVYEdlkcW+otKOp8yGJBoZ1d4bobhQZsRwXKcrEKNrMEZXIMZwXKeyyEKly0L9yjIqXRZmShKNeMpseMpsTJenrIAPOgP1QBNXQNeSu/sDPPC9H7TU/8Fnvcx1fYEoOT6mQGB8XuD1yiKLe0NtMZUuCxM50jbAj+IXGY7rVBZZqHRZWLHETqXLQj6oLLLwQWdgE7PjS3t/3Hp88wYPJS4rc1UskeJcVxBdSzYxBQK/qRH42h0ry+w3VbuYTDieYmWlg/oVZZQUyuSjkgKZHC+zQNeSLTF47vmXmh97+vEG5qpzXUFyWpgiA7+uHti19VNL7DdVu7ic4bjOhtpiSgpl8lWBWSTHDtiZHU+d+rDXt/9IO3PVqQ97yWliigz8Gzvw+mfWLsZTZuOTpLLIQo6XWaBrySFg+7de/SmxRIq56L0T58k5yBQZ+DdfW1Fpt6+otPMJZWeW6FqyKRZP7Xn+pWbmmv5AlHNdQXKamCIDv+IGGu9YWcYnUaXLQo6X2bX9vZYLvv1H2plL3jtxgZw9upYcYooM/MqOFZV2JNHIgqnRteQQsP1br/6U/kCUuWL/kbPkvME0GPiVek95AdOh6RnmO11LNsXiqeee/of9zAXnuoOc6woO6VpyN9NgAOyA11NmYzr6h5NUFlmY73Qt+aVzXcGW7/2ghXy3d38rObuZJgNQX1Ios+CKbP/eD44PvXfiAvmqPxBl/5F2cp5nmgzAVkk08kkWjqfIGeIq0bVkC7D9+Zea6Q9EyUffevWn5Dyna0kf02QA3P3hJEfaBugKxJiq7sE4xQUyc8FwQienhatI15J7YvHUc0//w35iiRT55L0TF3iv5cIQ8BQzIJCzotJOOJ7i9PEQw3GdyiILlS4LxYUyBYpISaHMeGTRSL7T9AxdgzFyWrjKdC35pXNdQe+3vv/T+h0P1JEPYokUz7/UTM52XUsOMQMCOZ5yG5UuCyOG4zr9w0kGwkk+6AzQH06i6RlKCmUk0Uily8KI010hVlY66ArEkAQjJYUyV2I4rhNOpBhLEoyUFMpcif7hJDlNwBDXxuf2H2k/vrTS5d7yOzdyPcUSKb787D5i8dRuXUvuYYYEcobjOrj4pQKzSIFZxFNmYwPFjOoKxND0LAPhJCMKzSa6AjG6AjHC8RTDcZ0rIYlGSgplxgrHUwzHdWaBl2tE15JDoiR/7lvf/+kBi2Kyb97g4XqIJVJ8+dl9nOsKtuhacjtXYBHQCDxZYBbdnrICPOU2Kl0WPkn++95WchZxDYmS7AUObN7gsX/xvluwKCaulf5AlKf/YT/nuoJNwOd0LTnEFTACLcDzmp492BNKDLV2DclH2gbKugNxhuM6wwmdERZZYK460jZAzlNcQ9lMutcoCN841x289UfNbW6TKFBRVohJNHK1xBIp/vmtUzz/cjP9gehTupbcns2kk1yhRYzPDtQDXmAT/P/zbvZIAAAA0ElEQVTtwbFKAgEAANAncd2VgkcXYpBwLU4J9wf5Cf2KX+D/NPUJNQSNFzg5SQ1lcOCgoblUSBDlYlg29J4UaRhsqVUjbxpJ2bvD/V3LNJKyVdwVEz/h7GrgVcmGBGHURhftVrPuuHngqLGnsrOtllTUkorv6vUfDIuxXv/e9c2tydPzBTrz2TS3JiWryRAjRWqhisxXMTKryTGyfjk6NiwIoxinSHFiIUPsg1azbplhMfZYjH2SY4BLnM9n04E1K/n3pwRhFCOz3Gg+m+Z+2Qvn3XDSHXv4kwAAAABJRU5ErkJggg=="
  },
  {
    "width": 69,
    "height": 102,
    "url": "data:image/png;base64,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"
  },
  {
    "width": 35,
    "height": 51,
    "url": "data:image/png;base64,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"
  },
  {
    "width": 18,
    "height": 26,
    "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAaCAYAAAC6nQw6AAAAAklEQVR4AewaftIAAARCSURBVI3BS2wUZQAH8P/3zTevndnZ2e6WLaXdYimUWg20gYAgSiAEJEFJ8OCBGIkaPfhAD968aeIjPqNGbx40wRKMHqoIREgkJcijUK2NhrSUUtqlLdt9zszO43OWlKRudPH3I/gfNq9Ov9Kgq6/piqQGnBcoIUau7AwdHRp7JvDcPxEScBd713edaIrrz3MgqohMkZhgMIHKmiKlO1LmY5yQy7P50hhFHZs60y/IorCt7LiEEgJKCRYTGW3tWBJ/FyGGOq5ni8o9KZNIRIAZ08AohSyJ4JxjMpOFxBg8bndSJjKGOjzPi69dnYYiSVjeFEeVrkqYmiugJRXHheGrUBiLAKSToY4WUzVd10NTg4FkTENVrmhBkRgaohFYFQ+W6xGAN1DUEQR8JlcsY2nCgON6CAIORRYRjcgghCCmq5CYUAZwnqKO36Zzx65m5nOaIqHsuKCUQBYZdFVGIhbB5Ow8BEKGA8+1KOpwbGfg+OCVt6bm8tw3WiF378IN1grfDzA8No2pW/mp6fnipwgJuAur4p7mfrB9ZVJsxdwoiZMifh8v4avjYxMXr44+OjGTPYqQgLugTEyXYgf2n/rLWPZgexazeRuHzrUgwzbEog1r2uYzp79GiKEOJkfvTXcd7JOUZLfrZNE/mMSlmSWwuAJCAMaim7CA4T/IWvPallXPfiPKDasSLA8i+DhzM43FiCAZlIk7A8/9ScC/0LRIz0fPbf9uR2d+xZpUAU9sLCLCCC5Px3CH71nglQJ4pXDesm6cZajx+cHH329LxQ9EZNGURIY7mowieODDs26CO1nQigVKGVQxuRQhhhrLkrGdpq6aAefIFiwEnKNQdvH2ERseH4IAitsoQxWlTEVIQI3WRnM3JXQVEyiMiAxNlWDqCtqSPgZGXHBwcB4g4D4CMQJPEAYL2aF+hhqaIhkio4jrKubyJSQMDVVrVxjYs5Hih9FmAASUSiCEwCtNcIQoapiaOtC+NIGqkl2xEQoCjuvFAh7eWkJvawGCIIMQgts4RxVFjZFrmQwWFMrOQL7sBNecPPQmBaoiYt+2DBrVIu7gvmsjRFHji/6zY9q6fZA6tuDK1PzJa17uitkYASEEVVGN4ald42CoYDGKGlt7O1+8b8MWrHhgR+WdvpN9M9lSfxBwLNa8RMDTO8ZAuQ0eODZCQkKX1u3uXfZGe0p/qbc98XoyFu1Jtqwkl3494/1x7udTfSdGPnvkodVPRlTJxCLJOLCuY7J8uP/Mq649m2F7N7Z9KTPaLYkCCCEAKvj2w5cRkrtazM3DE7nvR0anP1h/f9t7ssQY/mmiND9yGSFast3msuPBcX04rg/L8eC4PhzXh+P6HkJvfnLs4/HJ7CHX8zkW2I7rjk/eOoQFBEDj8kZ9z8rmaMpQmWG7geX6voPQXL4ycGH01i9YsG93z/6eruZuEro4PHnhyI+Dh7HgbxwAuNgqJC+lAAAAAElFTkSuQmCC"
  },
  {
    "width": 9,
    "height": 13,
    "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAANCAYAAAB7AEQGAAAAAklEQVR4AewaftIAAAGQSURBVF3Bu2tTUQAH4N955Jzc05NGqG1CbOmDWiFVEfGBHUQwgzjp4qIWirujOFlxdNDN/6CTQwURB0VBdFG00oohNAXbFGtq7rWPGNNzz7nX5Q6Xfh/BPtemJp8C5LLgLA6tW1pca95gSDk2XLxayPfc79We0EoKa92gzLA+jpTYhQNTJ8bJ5EgRna7B51oDwffVIkUKJ2RNe8IyRpHXHrTKgjP6iyLla6P1cqvdfb6nSvGOlaiu+ovNrfYjjhQm9MCTT2cLld8B2XMa74MrpeXlO18YEkp5pQfT11+UC+LMit+LhdYBxFGoXKf5gSMxf+/mWyn4hAlbqK0L2MCChF3kvKExisTKhi+di5BTEidHu4DQiHOHgPywpEgcGezftC760zYmnjgOVE554KofhEpHkei7MCOHKjNL21nzQ3gcl85tolzcRRwZw25dHH91+vDBh76/M1arfvvJ6O6zHiXPZzgh5dGgPTf/7jbvGBvpbGa9vvC6YaO4fvdNfXbu8fSIl80c/fvPfOxsVzf+AyjsmtJfK304AAAAAElFTkSuQmCC"
  }
];
mipmaps.forEach( mipmap => {
  mipmap.img = new Image();
  window.phetImages.push( mipmap.img ); // make sure it's loaded before the sim launches
  mipmap.img.src = mipmap.url; // trigger the loading of the image for its level
  mipmap.canvas = document.createElement( 'canvas' );
  mipmap.canvas.width = mipmap.width;
  mipmap.canvas.height = mipmap.height;
  const context = mipmap.canvas.getContext( '2d' );
  mipmap.updateCanvas = function() {
    if ( mipmap.img.complete && ( typeof mipmap.img.naturalWidth === 'undefined' || mipmap.img.naturalWidth > 0 ) ) {
      context.drawImage( mipmap.img, 0, 0 );
      delete mipmap.updateCanvas;
    }
  };
} );
export default mipmaps;