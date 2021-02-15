const img = document.querySelector(".img-main");
const newimg = document.querySelector(".img-next");

let newimage = [
  {
    src: "venom",
    alt:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhUWGBgYGBgYGR0dHRoZGxoaHRogHR0aHSggGx0lIBsYITIiJSkrLi4uFyIzODMsNygtLisBCgoKDg0OGhAQGy0lICUtLS0vLS0tLS0tLS0tLy0vLS0tLS0tLS0tLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAEBQMGAAIHAf/EAEEQAAIBAgQDBgMFBwMDBQEBAAECEQMhAAQSMQVBUQYTImFxgTKRoSOxwdHwFEJSYnKC4Qcz8SSSskNjosLi0hb/xAAaAQADAQEBAQAAAAAAAAAAAAABAgMABAUG/8QAMhEAAgICAgECAwYEBwAAAAAAAAECEQMhEjEEIkETUWFxgZGxwdEFMuHwIzNCQ4Kh8f/aAAwDAQACEQMRAD8AoBxq+2PScaOMdhwkbtyxoRGN0Sbnbb1/LHlSgN1GnymR+eAMixdmsyShX+Fvob/fOLXQzihRNiMc/wCDZjS1zpDCDPUbX+fzw4z2fWmupz6DmfTCMKQ+zvEQFJkQBvyAxXKnGtV0LEgghVXUWAN9RNhI5C4+mFdEVM2dVQlaKmyjmfx9flh3SRUAVAAMAY2yvGKdUwshhfSwgxifXhDm6emsKoOkTpc+ZH18/TDigCZB3G/4EeX5HGMExj1TjejRJsMELlGHI4ATWhSJw1yeRM3GPOFpDjUPTD8RhWxkgNqRAwi4xxVKBUVJlrwOnX8PzxZauYUAk7ASfQY5Nx/iQrzmCoJcnQrbLSWwMAglmM+Qg40VbDLQw432zDqq5dTRiZaZqH+6PD7cz5Yq2Y4nVJnvKnu7GfWTgNnkkwB6f5xBUa+GFSDxxOpsWmbXv9+LtlcxlMzl0FGMvm0gFZha1ohR8JY8gYMjmDjnIwx4RnGpVVqoAWS4nYGeY5iJ6RM8sbszRdMpmnJNOoNNQbjqOo8sFrRJ5YdZygKuWFepRWk6LTZGsDBOkhhyWAwIOw/pEAtmgNtsBhRmXo6d4wWK1sLXratsQVa5FsCgjQ1sbGkSJGE1PNXib4cpU0pcxAk+XXG6MBVakfh5ny640d3USyEL1Bkj1G//AGzhNx3jppKGUfa1AdMj/bTlb+Ntz025XDHCmqANWrOXNyLQJG15wQFrpwQGUhgeYxHUzgDFGlRbxcj5T8xHlhFk+zDEHRXqLfmOfz3xpmOyjKrGo+sgEg64E+Y0/wD2wdAYBmc1TAH2p8Xi0KotqMx0sIEYAfMVFIkWNotPv54PNCmFChAGHxSLz+h9cDV1lgOS3PlilNIlabC6LA+3zGCkF/bAdNCTO3IenngxDbFCLMjGY9BxmCAX1gF+JgpN45wdrCT9MRjxcjHnafbpglKVyx+ImT+ugxJoxPZbQGqT9fvOPGF4HST5DBqpgRkLOyiw/e/L9eeA3oK2R0VLE6YbzIt+RHqMErwR2ibMNyYK+WkD/GCsugWIEAcvTfFpy2TVlEfoG4/L2wjGTKxS76mAvdqygQNJj78Y2YqmQtJp5XFsWmpw0DcgDzMffgnhnCwfEsPHQg/dgWMU6lwV6hHfOwEzpVHj5xE8ueLFSy/j1RpQLpuILGQRY3AFxe51eV5KvFgHNNBqcGImAD0LX+kxhpk8ga6hi4Xe0bEEgg33BEe2E+JG6OrH4WaceSWiDLUwSIw+QCBOAU4Z3Rl2Edf1tiapW6Yzdkp4p43UlRLVpLvAtjx3xCXHXGr1LRgAFfa+sBlKvi06hpn+qwFupIHvilVMpPDqR0gnU5B5wTHysT74tHbJpyxgE6XQmN4DcveMC5LS2RCiDobSbX/eYbcoH1w8ehWc/wAzTACiQZmDEHlv5b4BbBfEabo3i629cCm98FmNQDiz5PIp3IUGaka2MDdgq0wvNh4m57ocI6A0iSJkT0neMWbsRwt8zWaC2mmAwMTESJg2sP1GMY6f2d4VPDQazs2o+JyB4gpsbzIkxJ3C2tGKXnayliaa6UJOlQI0rqIVb9BAx0ntFnO7yQTUFJFSOX/pOBb+oqPVhjlFKuiJRpsTOlr+I6jpVrCJHxAfM4SO2NJUF0WnGlZZtiKvmBpB1FQRY6Wg+hjBXBsvQeJzCAk7EjUfQHDCGlCkJkXjEmeqlqbLIllI+Ywx4plwg0qvhjfeZwnGXdjYE4ARRxvJPVhwVLraIgRvbz9fpiXs9UWo/c1RoqbA/CT6Efvc/PFiyvCSIL/8Y14r2dpVbyVcKCjDyJ3j1X5e2DZqGPCKwFEatwWVv6kYqx9ypOFXG2JsGsL77m8A+/yjC3h3FWRalGr/ALqsxk/vE3+d59564iWyTzP4/qcNGPuJOXsK3qyRMyzEE+m5vzwTSUbAQB+pPn54HzVCdv0euJsnVmx+IbjFffZF/wAuifRiQWH1xsn0xKU8owxOyECb/ljMTADpjMCg2DKmJFozfBSUZ5Y3q0tKMw6GPXlhWyi3oBrLpBPQYCyIADMTufw+eGmZokRq+EmN9uYv7ef565fhWg/aDxA/DyHr1+7zOJ3bKcaXZBQSo/wLbqbD5nf0GHmQ4FmaxUJmUXXKgiVBKhjEgapsbx+ExMpMEny9PLyGHXZ3N6SRBJU94oHkRI/u0qP7jgOzRasVZvsLUSWrVKin+IUjVU/3U2Lx5sgxX6WefKCqyVBLTRBQyG5kj0A8iNfK+O6d+CZxzD/U/LUqmepay601y9WrUNMDWSp5TabKJPIYlbLqKtFW4FmIOr1OL3wPiIhln96T8gccto1TTcpIKzZh0NwfQi/lOH3Dc+YJn4jq9tvuA+eOTcG2fVeJmhkjGBfuO8XDUXUxdGAHU7fecK+A541KZBklCF1E3aRIJ6Tf5Yq9TNNVdaa7sdMnYSYk+QF8FZPPLRdjRDslWgrjvBBJWqyBiAPCDdgNwHEk74pilJytnH/FFiUeKLaanzwFxbMVlfRTCyACzHkCYFjzJ2sQYMbYrWa4xWYEhkTTu4MxcdJve3MeUzgFOMPRgC7EhyzAGZFoBnqefM47KPnOTsd5sstGq1Zu8JK6SDKeFhOki0zAP9Qwi7MZ8KaiM0KwFidmUwPUkaR88bnjlSvUYVzqWAhXkAzohiLAgMzCOYB5YrD3ggwYANreRHrA98DrQ/ass3GMsHBxWsvSEkEgEQADzkgWt9+CKXFqi+FvEPPf588RZvNhypAiJ+uCwG4pB20LO7Tblqkehjl5Y6H2YzFPKrqdgoFp9o95mMc+oZ409UEEkkz7DAlfMM5l2k+fL0GMY6Z2z4z3zJpqBleABBhKYv4p3YtJI5KADN4GoZbL1cv3mbp1dPfVQrobwyUmAnrB2uDHlip8P30vUPiiY/dB2322Fo6YvOSrFcl3ndI6hizo1S5V7RBBBMLzEX6xK9Bl1Ygq9l0Zv+kzYdeS1SFdSdg0WE8mIAJtIOE/FeGZnLf79J1E/Ewt7OPD9cN+KcPlj3LQqnUjVSVI0jWaYLTBF1A56LTeMTtRmqWpZ1kswCOxI0yNMKCDsWFiN8Ut0SPKHF1o0KRBhnn4XPhAIuwm++0DbDvL9pSAsEV1Iv3dnX1WNvr1xWeIrSzEfYnKuAdXgbTtMmBcSCAQNX9RxX8xlqlJ4NiAGBUyCpAKsrDcEEEHCvYyR1M8VkyaGZ9O6P6PtiV88xXvO4rBVBBPd1DEwf4I5DY4oeR4xVqslNq9SmdvABDT6Xn74xFncxmQ7S9RghIH2zsPDY21W9LR0wKDbG3GQHZ2VlmQ4hSpmFXTLQdhMR/jyhUNRNo0zI88ecM4wh/36inwnZqpA5AFTTIkbkgkYOpPlWDKlQir+7aEaSNwFDiRNyow8dMnNNoXhcbGiDuJ/XXEmkSQDMe/3WI8xiVVxbs59oHTJkbEnyJYfUfliYBxY6fIkk/gMEok4kWnb53wKDy+YtcNPx/Jf/1jMMdOMwOIeQVTpYh4k6pTJM7iB/MDqH1GD6K4WdqTCUx/P+BwnY61sZ/soZEciQwVxPncfLEPdm83Fo9I29vuIwQvFaNPL5ZSw1d1dRcg6336TY364X5POGrWOkTSVDf+csoAnnZSfKRifLdF/gy48q0EMkWxtlammoGuLxbHtQxgR38vbDkS/wCWzcjebXxT+M56nUz+Xa5Qs+UdgbfaqI9RqMeqzywtz2ad1hqoUQPCDvyvH44iyVJWVqSPDzTdJEeOmwZQL354nVHRCW0U58o6VGpVRD0/AQbbGL+xsekYb5ehpp0yZkKQw6MJB+q46P2g4dTz+Tp5mmgGZRFdJF3VZ1U3/puI6oMc2aghOqnUJRgWYGJBvAE8pkSeQnniMsfI9TxvKji2DZ2ofhRW8Y0rFy5JiANzJtHlix9qE+1qUgQFoU8lk5F/EUVm9SDTafRRyxa+xvAqWTy/7fWOqsyM4Iv3dEpNl21nb3jCDtHQWguioYq12q5tx/AHWEXrKgMvXfDQjTo5/KzvJcipL4lqcgqAKPI1En1O5JwC8uRtNh0HQYdVHpiiNKs5qkAEkLDKPlHi8uuF2cMKNYgCTpT8Ty2ubzNtsXOEYcMo0UpO9Rgylu78IIGoq17zMKKp9Qu2BuCKFPdNB76mR6MDCn0J1D3GPTWAy9AbD/qCw6Eqmj5BrYBylXvKZSIOllEHmDqHLoxH9uJson0MuN9ndMlFCzMLc7BSYPv+rYQNkqiQShHnEjnG3p9MW/h/Gu8y9NKh8YZ11N+8GpBgZ8rD5dcbVGTSqyPhpEdLlx//AD88KpMdxTKdQyFRjZDtN7W9T8sdE7E9lEDsXAqMqjVyVQ6BgL3YG4m0jlgLg/D2qEwpM0woi+5DEed/vGLJxPjTZfMVqKoe+qOA8LCimAFQz1GrUALQkc8LKTapDwiltor/AGvh3de7QJSFOh3lMfHUB1VSOpgaRHK3PCZ+OGlVD0WsgIam+zAs0joRcR6A4L49NPKZdGJAphS5W81GppsTYkQl+oOKlTzMEtaCIje0QBfFILRGbsv3EONLmilKmtMA6dTuArGeeoyAgPuRO95H41wJajmmHZtLfG0He+xAMX6mwxUFrkMHVom4HQjl+WHv/wDrqzBAypqUEB9J1NaLkkgES1wB0xToi0PMnwHMZWAa6shA1IjhW8WwC1QVOx3A54qnafSuYdEZyurUS6BWkyYKiwuzbWO4tGI+KcZrVwBUqsyr8KkmBHlthfWzDMILE2AvyC2A9By6YwUgjhRiqjBgNJkz9eWIHYd4zC4LMRI5Enf5434WftVDRDeEz0NuWMakVJU7gkH1FsE3uTZOvoYFbHaSA0TYwGETGG2Qy9RgriKiodTAi6SYuIMKY3UEC0gThPTp4YZTUt1Yg7H0wyAy0fsauR4grxJDcxvIYGHG97H1xqcsQSpF9vX0jEXCuKRZqdNhM3EXO8RAU+Yjbngk5xAxU+Ebi+0zba+3ljXRJx5GdyRYiD5742FO2Jn41SZIbxEWDSZienP3xuyAxAM9CPxwylYjxtAnd+WMwSVjHuNYKD0pYrnbRz4FXcAn3YwD9MXFKflircTo99m2p3iyf/ET9ScSsukk1Y84HkKQytGpTUanVnYxffSt/wC1vnjKwjG3ZQfZtQIIehTVGEbEVa4t9Ppgmvl7x12xGDSOjNcpWxFmjAJNgNydh6nCteJ5axeowBaLU2NoN76V3i08/bAfH+KLUqmmp+ypmLX1sLExzvMeQnCvN5jWYFM/D4ZYdTq+Extpt5YDyO9HTi8OPDlJ/cWPIig2o1EeZJQFVBZP3T8Z0WiSQeg1Yiz2apeGjRoqhPh7wsWfUQYg2AuR8KjCWhmxRoMdQNR/h5+Qj+USTgfLZ4d5SO4WogBJufEJPmTvhFKUn9DpeHDjh16mr+wsj9o6yI6qoBDS9Jp8QdUDMkHwkllBFxsYB3piahM7bH0BEg+tsPO1TGpSpZil8aN3dWNw6JBJ6CKYb3xWc3WY84DqpIHPfFbo4WrZ1LKdp6z0ddYUgKrpTy9GD42B8Ov/ANsMFOkQCAOoIr3aSoa2bGqXanTpqxYwW8MuTaBJZjt1wBwmpVLUsy/+3l0UU/OoaaAesWc+VM4ztNUYZuq42LEiPKx+X5YnJu9HR48IyfrVofUMhKpTGlHquy0xUlVAglW7xZCrcrO8svKYWPw16KMwqCmwOl3JDFZA8AAB0tMjSYN7nqzyGapZnLVFaO9pozUmPJwC4g7wSv0GGFDtA2WpQ6mtTqL3RpvoJ0eLwtrRg5pta/IjyxlNtbHzeIscrg7X9/0KQc0rCpSYmpqIZS0JFQDTHhtDL7SqzzxDwh9BuvjukGQVYMjA+RK6xHkeuH+T4VUOsjKUSjXKOHEi8QUdStido32OD6HAqGapOcsrJXpQzZV2LBgCPFSdvGCJAjVeRblgxmuiWXxckVyaK/nqAZD4rMFYf2h6bAcgdK0/+MB0lclVVbCwHIQT19frg2q8hnm4+JSolYtcdJjaw5xiXhWXLAsAzL1uBPnpBsLnAbBGJf8AsJlBTUeItoqyY5uVgxaAAo9iPTB/a2i5bNVKiBgaNOlROrZ9T+ILyZVqm/QnlirL2tGVpGnQDVcyp8ACgIFWSx0jxHaYI2Bwd2k4iGywYBhUrFaxMgjWQUcLFxCoszP+5bCRTsfJJJaOe9oc2YFIWUE+HppJUD6H2jCRjgjMVNTk8th7YhgFT1GOpHCeTiVanXEPdnG9NT0t1wbMTs4AnmcQgY37vmPmcejAsxLkWhw3Jb42DFt4nc4IpZdWpnQSHAllMQQD+7z23B6edtKNE4KYrJKIwxpHENKnbBVKmcOmIwyj6Az+vbGxy6vUMyAF8up3t1GI1UjHuYqFGHOVAP3/AI4Emg4090b1skoEgtI6kdb7DFhp1RJ0jSw2kSs8x6ed9/XFe/aiwKxE+v6GLPl6YABAm18Kmr0UkpUuQA7tPMeh/PGYbpXcCAqxylV/LGYNslwQzylItq6B4+aKcVbs4Q+bUkfFVJB9TP44uvZWkr5aqzEyneEhidVl8IYt4pgrveIxQezLE5mnG3egfXE4q0x8j4tFx7RVFyfFRUYxRzavT9K4ZIJ6SI+ZxF2orrl1d6ltMbcyYgDzMjBn+pmWp5ik9NgJNekKZNwHLd2Z6r4TI5jFPzWUXLh0q5TMJVX90d5XphtMaqbElVBkwTBAttiEdnRJ6oo+WddbajsTPoSb4nz1dagOmyiw5SffA/aPJmlV+BkVx3iqwuAxMgxItBETtHXAOUaY9dsBx3Z6OPPcfhpdnjUIFwWPljwV4uq+MbRsvpM38zh4nDg372mQCLTHkeojAud4SVYXnXMNGxW5gAgRHWcFZI9ByeFlUeSWjXLZuK1WkzaaWYLI5/h1MSr/ANsyfInE2a7PE5ju1grJCx/CXIUeRGtLeRwtzdKymL/DHoAMSZHMVKZlGYMCLg7DnB/HFLXucaxS5Uh1xXMCmRlkgrRGgnk1WArx12Cf2nrgPNstXxidUnUBZgTEmDvcXHn5YVAMfSTB5e55YZZKoCbmX6Wv6Hr64STOrBBfyt1ZplMu5WoVbabrO4vt8x64YVa1TXLkkN8PltBj2HywdwPiaUi2umWDsWvbkB6cvriR6eU0DU7U3Ahf3pi03BiY5RvhbOqHjRVU+/7/ACDxmswqLpDE7SKisp9FJVxbcEEDANbOqtRaqTTrAGVmRURpVoPJoJsemE44qyMR3sjcXAMeoifQXwtzvEQ7GAAsz4bbbbHzPzwFG2N5Hlx4VdvqnX6fmX3tZkE7rKcSCALmUFOvGwqaGBMdWCuDylepxW8rwtnRVesacwRo+GG1RHsAcS8M45Vq5N8nUculMGpSHNSAS5J5qE7wx5t5DCstVpKxURBhralB6See4tiyjo8WU6kO+zHC6Wij4z3y1O/LTAAVQGXUJI1AkggH4B1xJ26zJJAQKAykqBACoSRLmwDNBF/5hbTgXshnQ9RVrVCQzDwLA1DcyAI03vMCARIE4WcXzzVcwzC4A/6eNnYEKr9JjU0ciAN5nKPqEbVaA1p06TKDDuD47sApmw2EwIk3+I2teBQuq4GknYWgdPlsfLEdRpAky+ptc7yTzm8/niaoY0bEqIPzkDFSTJs4DTICmwAPrOBjVk3+WCKOaQkod1+AkSdJHwmd4mx6YMFGjUUCO7cTfUSGtbfZp9BgWahaxnliSnlydhjfMZQ0/iI87i31g+2+N6BDRpg7C3664BiXI0iHBg2ODcvSAJHSd8EUBp8RiSNvP9XxLl6EQQTgpgo1ShfbB+XyuC6NEGIW+D8pkycHkLQs/ZhjdqE14jZB+GHLZGCPX/P4YScTpP3vgkN5GDGnrgOXRSEew3PUAKDHzH3x92HKUIUEbECR+X5YrdTLVgPtNWnlLSJ+ZxceFpNKmP5V/wDHC3spxqKPBkyboCy8iAY8/rI9sZiyUuCmB8Puqz92PMa2LwQnRDpzEcmcn0CIJ/XTFH7H/wC7TP8A7o+8YuFXO6KGaYvJArKL/wAXdADygsPmcU/sm0NTsT9qIABJMEGww2L+Vks69SLpx2qKiE/wZgH/AOcD66jhv2xpArUI50+XXlioUs5roVmkHRVqExeCtWAPUCoSfTF37XVl/ZpEeJJt6DHG1Ujpi7RyLt/RBXLhospMjrqRSsxaxJxRyNJ1JESR8r+//wCcdB7U0zUy6gb6XjyYOhH3R7457RqfZFP3h4h6iZHrGrFqKY5qP3bLFwuiGAbWS8mYJj4ossxgjPBlKsULogYNp+JZ0+IDmIB+uEHDMy1MhpGluXQ8vnA+WLBxLOg0WcWLmw57kDHPKLUrPo8GaOXBx6a3+Hv95XqANRmWJ8eoTbcAfr0w3GUtosBz5lhzHKPXAOTTuzpDXn1P0w5pFRuTq84n5TbCzk7K+Jhjx9Xfv+xMuSBXSF5WAA/wBgxsgjLanTYebEE+hVbR1vgdKCkHVXdfIafxW+FWc4t3RMVVqfystojmUI+ow2MfypwivUqX/H9xnQzy5dTTqUiSA2l1AJ5xqi9uvO1sAZviVKpZFKIBeRc+d1ifPCurxOvWYKAFnkBAj0/PA75eVZyxKIQu/wAT+nQYul8zws/lf7eJtr6rpGZnO6lYUaawguzQWM84iOntGDaXBKdR2CM3ippUpk7XB1K1o3B9LYX5LMCnVDRYiGHVdiPliwdn6UNUordRpZD/ACNqMT5ER7nAnJrYPDwQySSe719+/wA/zRN2J7PtRziVa6h8r3dZqgLKCU7mqGWCRqYGQVW49L4h7Z9nVy6JXy1Q1slWMI8+JWAP2dT+YcjFwPK5uezppLWVgxVlZtPNKyjw1AOanSFYbjfF/wCGdkKVTK5miSKYzKKGGqaa1wQaFROgY33vOnkNTQnezl8vx/hTcH7HGMlxdqdCpQp6vtioYkiAB0AEydpnblMEK12iZG8cpwb+xOlXu6ilXVyrKeTKYI+YwLoxejhsIVzUJLSWAs0+KByJg6rWvOPaNEHaZ84j3uMDtmAgIvJGw6eeJMjmVNpixt1xjbCquWDIsxqUkArM6dwdzsSbcweUX0yhBEtq3IgC9ugF9ufngmimJamS1rAMHdT0PLANZ5lsuN9AaTPiGoj/ALrjBNbKKFDKmll30izKeoHMWMjkCOkD8LrlqgWb6PEI2ZWj05x7YfChIA6kC+xBPit6ThWxqIe6DGZmw9/fDHK5OYGm+IcnlRSq9wxs0mkeoB8SeqyPYjpiw8Jaj3/ckkt/SYBidJaNIaLxMx7YU1G9LJlBEX8uXv1wdk6GkYsOXyg6Y1zGSUi1j9P8YIEV+o0thSFBzHsT8gDh9UoMrEEbW/XzxWeMs61PBIYwLb/DjN9FILv7BlxMjuj6rh/2eqaRSPVAL+aR+OKaz1DAfUAf4gROLdwIMdAUgHRPsEk/MSMC7Y7hxii7qT9T9+Mwoq9pcsjFTVWQTMaiJ9VUj6nGYwtMqPat+7yFUlQuquqkn1pPztfQZ9MJOzFHSaJ/ed0Y8oUlWQeUjSx9VB+HE/b0941DJzIqVh7hlUM39qAkebYk4JLVA53NXVHS4t7bY0ZVEnOPKf2AHZU+PN0z8NR3qL7vUov9WU+2Lpx4qcjQAN+6AI6eBf8AOKpw/KRXCjmKoJ/r1t/5Rh/2jzqtTpUqd20K79F1orKvy1EjoALa1OJN8pWVS4rZUc1XgUYUlvFYRz0+wkiPY4r3aPhqpWaougOSHairSRO5ggSDBkDr54ecSzQo01aZJnwjckqB/meWKRmaz1KuqZYmS3nN/wBDFEw/DbMNIIz0SbagFbqCRpI9VIYeuM8feJTJ1AMseYkEYm49kyFp1htJpsehXxJ9CR/ZjXIfa1VY2j4mHQfqMLLWzs8eTk1H36BmqOrttufvwbkzVYgA78lsY6knYffhezd27KREMdxJjlialnyJCne5PU4Vxs6YZuLptjqtWCDSKWtuuufwGFK5gOwmA3JdMBY5nrAwHmc0TYSOt9/zxtTrP7mxPTyGDGNEc/kubpfl/wCBOZzYWVQ3axbG+cVVpqq2uJ873nrtOF+asBAO4mca1q5YgdLAbkyfv5Yojkb43fZNSpM7StyLjz8sNchnDQqU6n7kGCLyhMOvqjQY8jgXIVPCRqKU4iyy1Qz4ucKLdfng/KvSYd0UK0zfUTqIfbVEAQR4SABIPUDB4ckRjnlilyiyw8e01abMkTp5HnFiPpgjsv2mzGXoGhQ7tySClOppAKsDrpoW+E6gGCt4W1OImJrGUqNTZqLNDKJUzKsvI+hHMet8KypdyBYgNb+7b64hBOLpnseVkh5EYzXbOidouzzcTH7ZkiDWChMzlKngqrUQQSuo3OnSLxMTuYxzivRZXZNMMmrXqBGnSCSCN5gG2JqGdqUqi1VqMtQRDAkHwiL9bAb9MX5a+X4kkZwdzmCmkZpR/ECimqotUTlqF18htZTrs8qfjvbXscvyeWLk1DF+on8fzweuQDCCF9Y0x8vyOGef4O+VdqNUANTsSD4TadSnmpFwfPGy0jYRf7juZ9NvlipzWALk6tMgIe9HSLiLkDabTbywz4dVWoJWfkcT06OmWMwILT0UybbbA/PGcU4a6nvqI+0Q+IDaoomZA/e9PvGFYQXhVAHOVIBkDp1Cnn74uFKjEAb8zip9iA9TMvXI8LK220goYHzjF5KKgV6jAajYTLH2Eke+JydMeKPH4IMyFR5gMpUgwQw2IPKL388WfI8Lp0kWio8KXE38UyWk7tNyTvgbhGeosxC1VL8luDHONQE+2G9FbzgJmkg2mmlBJkxc7SfTlgaoMZVr1NVlQoGQEkmbxMCIO/XEtVOXW3zwUBoEp0ZFxIN4PnfFZOSDZ4qBYKWAPQoAP/LFyrqAvSbenX6YofEuPFcxUq00CkQkkzuIkXjZZ98BstjWn9gZ2iphEGswbEDrG+EGY4q7jSPCoABi0wIv6wcLsxnCzlidbEzfb/ODeDcAzGaP2VMlQYLWVVO5vtN9he+DXuBypUDd4nOSesfmQcZi70f9M20jVmFB5gUyQPcsJ+QxmN6Rbl8iuLOb41VHKkKy046inTRv/Jfrh5wfKNKnSbGTbkIxX/8ATLMF+LM1SAawzLf3GtB/8APbHcKeTpi4Ufh8sLO9I0Gk2/qcozwOWQ5lgGdmK0ac3Z3lUHub+gJxLR4V3SaGIZkRWdh+9Uqli58hCUwByVQOWGBprneKFpnL5PUqDk1X4ajeYBOgedJ8UP8A1L7St39XJUGBX7Narg31IpBT0iJje464koten3ZZSjOXL2Wir8dzpr1IT4EAWesb+3+MC5ZQFB5mCT5YxTCEiLCPfHiUyVAVdRJ0qPSCT9RfFUrHk1HbCmVqmXZwTAdyV6qtKSfY6b8tWMyI00mPIiR0gjafX7xgx1qUqVFIAfvKxYRIZDTpypnkwthRkF8FVe8kBbA8ydX1H442RaK/w+f+K/v/AF/Ya5ejSq0lNRRYRqmCOl/wwLV7PIBOuoqk/EyW+diPcYk7OLKiCNyRq+uDOIZzM05SzKRdkidJkbHnY74ipNOj2ZYMeTGskl7ey3/0KM1kqNFl8feR+7z9bb+hjEeZ4iuoGkHM7alAE84M8vxwTm660aa00Hje7R0PVtzOAc/T0KNREmLdByAHIfX64rF32ebnjwtQpfOvb6WzTO0zBZiCx5DYeQ6nBvCOFsFBPheqIpn+FS2kv85HkAeoOFKzVZKa7lgAPW2LrnFJYKAwVQUWL2UBARE2MlrjlfFUeZllvQnR1dnCppVG0BeYVQAPQwL+c4MpZPE9WhFXWdJ7xEPgmSwLzqU7NA2E7TzgNuD5dazaEPi5rsw6+EwcURyvsU1eGCqFUtpZfgf+E9D1U8xy36ysznDK1A66qQQYndSG6Eee3ri/57htKkoNR2pmROtbQbCNM3ttOEnakd4hek8ABFqqPh5BpXaVcfEOR3wkkmUx5Z43rooOerB2UrsN/LDjh2ZqK1NATzUcrPHPldR8sKaCqCzMWkGJESJ6g/ELHBRzpLAmJSCCvOCDccrTiTidyy9v30XTiZGco0pJWtlz4wY8VKZg8iFMEdFLYG4Si1WcqQdJAPlN59/wx5mVZHNambhZEc4n8DGBeIU8xmKgZdfdVANHdjQNMGEc3A0mbkNMggQww2OWqZPzMPCeumMM+1NQ6GogYq3h1CYgzbfacMOG5mkyr4hq0KzDciQJmNhPM2xV24BUor4qaqzxTUgsSdfgJAMQLkxAYRzAOM7KUWPECs6kDVAzL8JUA/QkKPfzxRo5Fot1LLNR7xrCmCxpgb+PSXn+5ZHqcIsxmahBYAlvhXy2BPrefbFj7U1oRVH77D5AXxTuJ5rSFEwSRiLVsdOi79nAsL+0U37yLMFMLAmS3XpF5xfeHgMitvqVTPqJxROB59ny2gMzLYyhEqRzuD5fLHQVaPbCQ7ZbJVKhPnFXvWPdEkPS8drfBbef+cHZnOpTGtzAHLmT0A5n88LuLVyhdtQ0lkOmLsQFO/LlhKmRr5xi06U21Hp0A5/qTihPQD2h7RPWMCQvJFO/9R/AfTAFPhb1SqP9kzXgqZPJVVdyxkRJHrjoHDeBUMuAVXU/8bXPt09sKuK5ZamcYPEBQwJEgEKsagbEdQeU4wylpgOY7Kpl8uy1Z70lWQg+BhYFdp1LLeoM3vHQeAKqZWiIA+zSY66RJPn54qtUU6lFnFJKRTSAqiJJIlthKkfD7+zCtxKMugUwwQCPQYDtgtUWCpnkBjVjMUJ820mbeuPMbiDkcoPG61Pu8zTinVjUCvJzX70+E2gljbaDGLxw/wD1wc5WpTq0D+2QVpNTA0FiCFLBmkEGLCZ8sc/4i69xRBjmCRyuPmJGIOEIQyuSCNzsIj9fIYMmikcLbos2f7VNk0ehlhFdkWmK/wC8lIDxweTu+pp5ajziKZlVvFyTMnzN4k8z1nng+vVWrqeZDE3PlbDbs92brVDTAJp94ZRgt9MDxSRCjcDmYMWBgt2wcfhpMWZThtbMP3dNTCmDaynz8/LHROAdmqiov7OlOAINaoZHVtACnUZmXNp21AW1yuXXKOcjTJBqFTTqzJfU2ms7EiA1OC3SCuLjxnOLleH11p2IQKi/wCCojytvgKSukSycpeqf4HHeP8Qetnj3bQqEKG3llUhmvyP3AYUfsqaGfUwYgnlc3tHP6Rj3J5zQla8F2CTz02LAesD2nrgcsdLQpI2Jk40mdviwUbtXr+2TcJp1dIKNA6W/HG+d4lV0sjATzIkEeoxrwvMCFUyBA07wcT8RrDREbEchOJ1vo9KP+T6ZNa+f6GuVRaa94x1OQInl7YX55zdmuTuOn+cE0Ms5YSYBkj2iY+eAeIPBZV2Buepw8Vs5vIkljqq/f5j3/Tbh2vNNVNxQR6sn+JR4Pm5Qe+HPZ9poKz+HQiq08ipcfM2tgLs7nGyvC61Zf9zMV6VFJ/hpzVqb8vCqk/zDEuT4koripp+xlKrxfQralZuU6WZCbWvin1PJl3Qx4lQbTRcgg+MkHZVXxAHzAJJ9SLgDC/OcYSQ9Ggi1VgmqV53gqklQfNpJttGL52lFNchWYBT9mxVt5lTcHnIJ+eOZ5qgQk7y5Sw3ICmZ6STH9OKR6IvsDzXEKtR9buztMyxJv+ow54ZnW71qlM6aUJ3ikAwWXS5NtiwLGIEHbkUtfKnaDPpvOHfZbSmtaq/EYnkdIMj6nDVYsnSIO13CFVhmKAHdVFXvFX/06kXtyVhcec9MV/JgDVPv6YcZjPtlav2ctR0lGRrhlBJCnbbUIMyORxtlqmVqurIRSJMNTcgC9jpbY+Wx8sTlEriyOK2T0cwf2UlY1BTTYdTsp9dsWz/TnPIa1TKAnTXRatLVyqhSHAP8ACQq28vLFEqUWy9ZqLzGpSvmQfCfkfoMDUs5Uo1adamfHScFb+ZMH6j5YjTTO+WRZIL8P6lx7cZ8lxSonvDuwUau7Kh1OoeUgxewaeUkdj8nl6FMnv6RqvBcao0dFhzqne56/MOjxrLvWzFWmADVGpps+mxYf1KZDfxKJB3xZ+B8Op8Sds1UQGgo0U1j43jxsxF4B8KjyJ5jFPY4pRp0I+2HEqYYKGXwCCZG7CT/9cUWpnpqajddo8vzwV2lqFK1RAoQBiNOkACD/AAkYWLRVxqQQR8S/ivl5csNGPuTbLTwOlFVQjHS9MsL7sASRbfkMdszmdRYJM6gDA8wD+OOG9ms6aTobEKwYBhI8/SRYxjp5rK6JDbIoFtxFt77RhXB8h4yVEGeqF21m/ODtzgfLDbK9oYWO7FuhgfKMJHuGv4hy+e/ljMuoKmeUeu0/dt7YPH5mcvkP63aBBfQxncSIG1wfwjCLP54VK2syoaCYvNtosCDG2N6uXOiSIv8AjGFzGL8p2N9pI9rRjKKFc2Ns3n2e02Ai4F7ydvPlhTxfPuhQKRpAi2zeom9oxG2aDAEH4SZ/P6/TCyvnA95Ecvu54ZRA5G7cSY3t7icZgM+2MwaBZUs/kqwoUkZKhYSQFUkENcg8wRI+eHfZjgD3NRqRMEd0TJkbByLBbkke3PGtGqRuAb8xz9Ri58BzlGmGOYQ2E/veECCSQT/DOObLLgrSOvDFz/1FNo9kdB/6ivFPVqMLAN/hB1SPSMPf2+nSE0+8qSSV1A00WBAjrAMTcxIm5xJmkLBsyaTKahJpK21Kl9noEfxkGWPVx0wmz1dmjUcCDcgzSjv8DM9x6qtRKgAJLMgXkA6mYmSLhST/ACjB+b46n7G1KrVBr1WLHlKqFCwBYKIIA8udzit1wGqUVNx3ineLC5vytOBO0aUTmKuiqKqFjoqLyH7otaALWtbFqSOd+uSjf1Ae6MhheWJjrEbfXDHiNf7EXmYYfIRhVrIGk7qZB9vyODyveUSIEgxbruD74lI9bx5emUV7oi4XRFSnDEiLgj9eWPeIZFkKjWTPSZ+QxPwyjAM2gXx5UzAln/eMgeSi31wV2M1H4avs0z1eANLNCxpkEFYkGNUSCCfO3yT6AxiTfpdj7fniavmGcwJPpgvhLMjgFaaXnW8SBIHPzjDdHFkfOQd2jod2KFAI6lKWp9RJkuxKxYDToCHwiJZpuDgzslV0V6BYAqxeiwOxDgkA9ZJFvLFj/wBQMh3lWjWpOldXy9ISrr4XpgBlaCdMghh1ggYrdKlrp6FKnoETaopMMXaGMTphZEEmMVW4nHK1IP7SqlOk37LXZ8vqZHpFtSKfB/tNcgeLlIkHCvL8Wd6VOiPgptVqM0AMSQsaovK8jN58sT8WKjIUk1MWWpUDqVI0OzT4j10hADNwLDfCPhNMszqJ8SNHqg1r8yun+7G66B2Ov25RJN4WFnysPSMb5PiAgWZjrLELyH5xhCakAEx+vLfB/D6RCSWKkMYPJb+hPnPph0xGtBfalbKwQqJm43EYTotJgWqAKBBMEy0RIUHnz6CbkYd8cfvKM2MRBG0T62tiv5FwGlhJOxtbz9v1ONI2Poay1ajEAVKQPdrMkU+aknmurnEA+WFecHxMuxY/Q2Pvv74zK5lVmxJk2/kIKkHmZDPOD+KUtM1FSKdTTF7aysmLX5z7YhI6cVXTN+BZ7TWR1RXOpTocAgnlf908pHvIti+cB40mRzyqDGSzqpVpzYUy+3oAZU9BHTHMlosB3iNdSDIswIv+H0w+4fVo1csEzFcgU3bRKFtS1NJZARZXUqWAsDqtzxoNDZovsa/6tZHTxCo24qLTcf8AaFI+an54qOSUhgRyIxY+IZ2pVVUra3al4UNVYJpkArIgMD6kz7HCu/l6R+eLro5H2G0kA2AjflI8v10xauFVj3cTt+vbFYrRpUgXAvG5m59d/phxwvMiF1e36/XPGBZZ6NMBSxsblvSCdvQcserNFoZpUiNQ6jl8wLx+ML2zqgqBNgee/l6X22xFnc5I0k6rb8/+Rt54FG5B9fiBaOh36bzA/XXAedcad7kXt+umAf2rwxt+QFsRU6wJvywaByJqVL64N4b2Vp1u8bvVplRMAkSABtb9RiKBhhwYxVSdjY+hBH44ItiFOC0ouVPnLYzDXOZIo7LGxjGYNo1lLpZdiwKxcAQfXcfrkMX7gfZV8xRBqOnd6p0RGqNJhiBLKbeEmPLGYzHn+VJpaPS8ZEna7KupuaXjVj4UiI7sdN7C/wDV1xRuJ1yRNxTSygxa1zC2kxJMXx7jMbxX6TeTt2VTiGZNUStlEx1Nv8HEfFNA0og+CxPU4zGYt2zJKON19P1NKgsD5A+22DMrW0k9CB9P+cZjMBlMbaejetmoGkc8AOCTAPr92MxmClRpycns8zGZKeCnaNzFycZXyFQUzWcFkmA0jf0mcZjMEhJ22WfK8KCirlBSU1qc10qggM1MLLKbQYnUJIuMGcDbSAYF9U+oj6EHGYzFIHNl6NO2PE6dPMoiU1tSVaxMk1CwDNrncCQAB8OkEGcIsrSNKqiib1aag2ujPInz+IH2xmMwH2NDoU0ySQDew3wbQ1aAR/MoIN5kEmPQfUYzGYIaNzmjp7oCDHi58hEHfz9ScL0e+2MxmNegJbC8rQUvL6mIAAVTpuDzbkI6An0wZxGpUeoimNKQqUxZEEbCd9rk3J3xmMxGTd0deLHH0v6ktFPDH8bsonk6iRtyglffDX/TfiBpPUA2Mavpp39WOMxmBEpn6+79Bh2iqioCD8VtLC22w9r/ADPXFepVJKzvBDeoIj8ceYzHYkeRYxVfqBiSgxDafcek4zGYxhzkckzjUIABif8AGCWyYAuScZjMI3sNaA62kWAnzxDUphYvc7+WMxmGFGFIEC+CcrWh1PnjMZjGLhUyyudRG8fdjMZjMYJ//9k=",
  },
  {
    src: "fight",
    alt:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7-BQbjWtcNm9sLK967MENnPrN5066quAHJw&usqp=CAU",
  },
  {
    src: "carnage",
    alt:
      "data:image/jpeg;base64,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",
  },
];

let images = [
  {
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400",
    alt: "forest",
  },
  {
    src:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/fox_x-menapocalypse_lob_crd_01.jpg",
    alt: "apocalypse",
  },
  {
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400",
    alt: "Foggy mountains",
  },
  {
    src: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=400",
    alt: "Bridge in forest",
  },
  {
    src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400",
    alt: "Flower field",
  },
  {
    src: "https://images.unsplash.com/photo-1588392382834-a891154bca4d?w=400",
    alt: "Green trees",
  },
  {
    src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp63OFRQoOWxs2S2ZSQudLk7j-JCc5IdcfKA&usqp=CAU",
    alt: "thanos",
  },
];

function newImageLoad() {
  let srcsearch = newimg.getAttribute("src");
  let infoForImage = newimage[Math.floor(Math.random() * newimage.length)];
  while (srcsearch === infoForImage) {
    infoForImage = newimage[Math.floor(Math.random() * newimage.length)];
  }

  newimg.setAttribute("src", infoForImage.srcsearch);
  newimg.setAttribute("alt", infoForImage.alt);
}

newimg.addEventListener("click", () => {
  onScreenLoad();
});

document.body.addEventListener("keyUp", (e) => {
  if (e.keyHit === "") {
    newImageLoad();
  }
});

newImageLoad();

function loadImage() {
  // creating a random selection
  let src = img.getAttribute("src");
  let imageInfo = images[Math.floor(Math.random() * images.length)];
  while (src === imageInfo.src) {
    imageInfo = images[Math.floor(Math.random() * images.length)];
  }

  img.setAttribute("src", imageInfo.src);
  img.setAttribute("alt", imageInfo.alt);
}

img.addEventListener("click", () => {
  loadImage();
});

document.body.addEventListener("keydown", (e) => {
  if (e.key === " ") {
    loadImage();
  }
});

loadImage();
