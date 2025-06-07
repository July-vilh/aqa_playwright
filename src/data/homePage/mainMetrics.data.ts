import { COUNTRIES } from "data/customers/countries.data";
import { DELIVERY_CONDITIONS } from "data/orders/deliveryConditions.data";
import { ORDER_HISTORY_ACTIONS } from "data/orders/historyActions.data";
import { ORDER_STATUSES } from "data/orders/statuses.data";
import { MANUFACTURERS } from "data/products/manufactures.data";

export const DEFAULT_METRICS_RESPONSE = {
  IsSuccess: true,
  Metrics: {
    orders: {
      totalRevenue: 3465278,
      totalOrders: 145,
      averageOrderValue: 34765,
      totalCanceledOrders: 42,
      recentOrders: [
        {
          _id: '6826414cd006ba3d47616f17',
          status: ORDER_STATUSES.CANCELED,
          customer: {
            _id: '67da8789d006ba3d475eed7c',
            email: '1742374793031Romaine.Keebler28@hotmail.com',
            name: 'ArYdNbUxEbYkMhmgWBEpReOQmZgyXwkbtoy',
            country: COUNTRIES.GREAT_BRITAIN,
            city: 'City pObKNUjAiTPtkDH',
            street: 'Street u2oqBYeHT40t4PmZQcsCcjPicx5OJc8dh',
            house: 137,
            flat: 4568,
            phone: '+81463758682',
            createdOn: '2025-03-19T08:59:53.000Z',
            notes:
              'Notes afFPIXktpgJmYDrebRDqmJMCAfYveKuDpnmsNsjGVvjpQrrWsxZmkGXEbMPLoqNTGeTKwmOCWizzbgelFiXWusXqsUBSDjEsgllBIlePrgLZFBCFujkNpeUmuugrfXghQUcILcYTcfdzpOUcSTmFYANqyHBgDPXrmXqLYMOdItNfZWkrOztNsdDIuhsZFFXSAgyjbHYPKbdjuMuzsdfRxVvDVJiLfwMRUgAgxFoCzZjckRTpCcNl',
          },
          products: [
            {
              _id: '67dd3f03d006ba3d475f35ab',
              name: 'Bacon108',
              amount: 427,
              price: 93970,
              manufacturer: MANUFACTURERS.Sony,
              notes:
                'QCqnbre3Cn4hhuQzo4hOdup95GyPJsFZg9G0ihI0uA00bvK33GHx3avWS9S3CaFecUVQmB8QSLQiuhGe47ytqqFKJ69yUStSNMgdZkVSjZHcv8yhrBPjbjkaris4tjBVCuhIZ4Zcl9bGWd392r49P5s4zXZeFcVdvnJAwtSbS13hTsPlFW4BmHcSXRgCy7okbNHoZE5gs1IrhGwqp3xT2mXReroVSBy3lyW4qHBKXV7TMy9XjeWJ1hFml4',
              received: false,
            },
            {
              _id: '6813e87bd006ba3d476052f1',
              name: 'Cheese72285',
              amount: 135,
              price: 98664,
              manufacturer: MANUFACTURERS.Sony,
              notes:
                'jPw5SKKBr60xtsJ4RP4YOrrmGa2C1XMRqhA8O6tD8VhiJyVN1wq2gKvkgUq5OV3qWT7y3ovZ26O3Jpv0OWYOGJ1LExdlJnlPYSvgJQxzxlqSv6dFjNtfRHHP0i0ohDEW3DkHRpel968JIHTxXlb4VAEm618pTk7dcEMGdCo8APdi8vUp4nL6lTBibdDPrtZSY9y2mKpUptJsSM8FysX6L46hHgPprrcCWFQO54bEuIEOzLPEMv0S3UcA7V',
              received: false,
            },
          ],
          delivery: null,
          total_price: 192634,
          createdOn: '2025-05-15T19:32:28.000Z',
          comments: [],
          history: [
            {
              status: ORDER_STATUSES.CANCELED,
              customer: '67da8789d006ba3d475eed7c',
              products: [
                {
                  _id: '67dd3f03d006ba3d475f35ab',
                  name: 'Bacon108',
                  amount: 427,
                  price: 93970,
                  manufacturer: MANUFACTURERS.Sony,
                  notes:
                    'QCqnbre3Cn4hhuQzo4hOdup95GyPJsFZg9G0ihI0uA00bvK33GHx3avWS9S3CaFecUVQmB8QSLQiuhGe47ytqqFKJ69yUStSNMgdZkVSjZHcv8yhrBPjbjkaris4tjBVCuhIZ4Zcl9bGWd392r49P5s4zXZeFcVdvnJAwtSbS13hTsPlFW4BmHcSXRgCy7okbNHoZE5gs1IrhGwqp3xT2mXReroVSBy3lyW4qHBKXV7TMy9XjeWJ1hFml4',
                  received: false,
                },
                {
                  _id: '6813e87bd006ba3d476052f1',
                  name: 'Cheese72285',
                  amount: 135,
                  price: 98664,
                  manufacturer: MANUFACTURERS.Sony,
                  notes:
                    'jPw5SKKBr60xtsJ4RP4YOrrmGa2C1XMRqhA8O6tD8VhiJyVN1wq2gKvkgUq5OV3qWT7y3ovZ26O3Jpv0OWYOGJ1LExdlJnlPYSvgJQxzxlqSv6dFjNtfRHHP0i0ohDEW3DkHRpel968JIHTxXlb4VAEm618pTk7dcEMGdCo8APdi8vUp4nL6lTBibdDPrtZSY9y2mKpUptJsSM8FysX6L46hHgPprrcCWFQO54bEuIEOzLPEMv0S3UcA7V',
                  received: false,
                },
              ],
              total_price: 192634,
              delivery: null,
              changedOn: '2025-05-15T19:37:01.000Z',
              action: ORDER_HISTORY_ACTIONS.CANCELED,
              performer: {
                _id: '67c4fd63735ace5b03527f81',
                username: 'test@gmail.com',
                firstName: 'Anatoly',
                lastName: 'Karpovich',
                roles: ['USER'],
                createdOn: '2025/03/03 01:52:51',
              },
            },
            {
              status: ORDER_STATUSES.DRAFT,
              customer: '67da8789d006ba3d475eed7c',
              products: [
                {
                  _id: '67dd3f03d006ba3d475f35ab',
                  name: 'Bacon108',
                  amount: 427,
                  price: 93970,
                  manufacturer: MANUFACTURERS.Sony,
                  notes:
                    'QCqnbre3Cn4hhuQzo4hOdup95GyPJsFZg9G0ihI0uA00bvK33GHx3avWS9S3CaFecUVQmB8QSLQiuhGe47ytqqFKJ69yUStSNMgdZkVSjZHcv8yhrBPjbjkaris4tjBVCuhIZ4Zcl9bGWd392r49P5s4zXZeFcVdvnJAwtSbS13hTsPlFW4BmHcSXRgCy7okbNHoZE5gs1IrhGwqp3xT2mXReroVSBy3lyW4qHBKXV7TMy9XjeWJ1hFml4',
                  received: false,
                },
                {
                  _id: '6813e87bd006ba3d476052f1',
                  name: 'Cheese72285',
                  amount: 135,
                  price: 98664,
                  manufacturer: MANUFACTURERS.Sony,
                  notes:
                    'jPw5SKKBr60xtsJ4RP4YOrrmGa2C1XMRqhA8O6tD8VhiJyVN1wq2gKvkgUq5OV3qWT7y3ovZ26O3Jpv0OWYOGJ1LExdlJnlPYSvgJQxzxlqSv6dFjNtfRHHP0i0ohDEW3DkHRpel968JIHTxXlb4VAEm618pTk7dcEMGdCo8APdi8vUp4nL6lTBibdDPrtZSY9y2mKpUptJsSM8FysX6L46hHgPprrcCWFQO54bEuIEOzLPEMv0S3UcA7V',
                  received: false,
                },
              ],
              total_price: 192634,
              delivery: null,
              changedOn: '2025-05-15T19:32:28.000Z',
              action: ORDER_HISTORY_ACTIONS.CREATED,
              performer: {
                _id: '67c4fd63735ace5b03527f81',
                username: 'test@gmail.com',
                firstName: 'Anatoly',
                lastName: 'Karpovich',
                roles: ['USER'],
                createdOn: '2025/03/03 01:52:51',
              },
            },
          ],
          assignedManager: {
            _id: '67c4fd63735ace5b03527f81',
            username: 'test@gmail.com',
            firstName: 'Anatoly',
            lastName: 'Karpovich',
            roles: ['USER'],
            createdOn: '2025/03/03 01:52:51',
          },
        },
        {
          _id: '68263faed006ba3d47616ccf',
          status: ORDER_STATUSES.RECEIVED,
          customer: {
            _id: '68263e17d006ba3d47616b96',
            email: 'test1747336726866@gmail.com',
            name: 'Test oLkAAzQUjIGJGPAbrfyHRHKHOInFhYOeVcw',
            country: COUNTRIES.UKRAINE,
            city: 'City yTlOphhrTkIoMCG',
            street: 'Street 3mZChgZzDJNyoNNNrYYeRylnhXJ1LGnPw',
            house: 762,
            flat: 2788,
            phone: '+4124703239',
            createdOn: '2025-05-15T19:18:47.000Z',
            notes:
              'Notes YBgniZpYefucitWtzQJaMEtrpAYXuUrIVNUyigtdeTVFDqsSqJoYtLnlyvTvkxYaDgzmgjQIKroFtarOvjcbUzuPbpApPwFVGrtxzaGRikZjWgHjJFUjLNUnxLVIZJgMmyezbjcnOxkfQhPVWEWIZyWGQJhPWVWRgdNfjuhxuLdPiWwEtFFlpgsBxTokFMTkEyBBmjpvfCjgaluqyALDadSgyReVDwsdtOhhPpEFPMkMPqHjCZqE',
          },
          products: [
            {
              _id: '67dd3f03d006ba3d475f35ab',
              name: 'Bacon108',
              amount: 427,
              price: 93970,
              manufacturer: MANUFACTURERS.Sony,
              notes:
                'QCqnbre3Cn4hhuQzo4hOdup95GyPJsFZg9G0ihI0uA00bvK33GHx3avWS9S3CaFecUVQmB8QSLQiuhGe47ytqqFKJ69yUStSNMgdZkVSjZHcv8yhrBPjbjkaris4tjBVCuhIZ4Zcl9bGWd392r49P5s4zXZeFcVdvnJAwtSbS13hTsPlFW4BmHcSXRgCy7okbNHoZE5gs1IrhGwqp3xT2mXReroVSBy3lyW4qHBKXV7TMy9XjeWJ1hFml4',
              received: true,
            },
            {
              _id: '67da87c7d006ba3d475ef114',
              name: 'Keyboard27505',
              amount: 223,
              price: 51980,
              manufacturer: MANUFACTURERS.Samsung,
              notes:
                'ogxd1U3XjOpgHWSVUkQPweFYaQbdsPG3o0sY0TzKvMjiltdcZONY2U0VGUXFyb3lVcUnRczKcuFh0xmTySsyhUKqYebQvooPInBdqULPssuEXdLuj3JjiLgUgIcEk6nYsci4XjgTWw8h174SOOtS8NhqXlRHLcODk6cOEgXQiKcYrxFhlDFQ5UvqQ6MyTeZ8KgWyLmQ6dX3cn92rQrova8rqQsSxj2OlLo7S1EmyTQfzYEWvA56zDCd3sv',
              received: true,
            },
            {
              _id: '6813e823d006ba3d476052d3',
              name: 'Gloves66160',
              amount: 313,
              price: 78052,
              manufacturer: MANUFACTURERS.Microsoft,
              notes:
                'PSpO0mIPhQwx3eWFQA6Qo9YMo3Fnk5igj42WcJsxombHBu0ZoNtcb39rtSTJJC9fEn0eE6Lwtkqbovc6wq2AVgY3Mk0Ps59h3jroIPbwYLkI9B1YQ1qWkrd5uOO8MuBHHkxoY6VxG7ysSw93AjsZsVGBdXSMb0ZZlzjF6myWnkBYNiZpPmEMUKoqL0pk2qpiMbfHntGPd3c4sGBUBXvS0ugUQ6uoPykrVszbNoJGZsN0NNAp5kLd8czqPS',
              received: true,
            },
            {
              _id: '6813ec93d006ba3d4760534b',
              name: 'Sausages46201',
              amount: 415,
              price: 85201,
              manufacturer: MANUFACTURERS.Microsoft,
              notes:
                'xgwt5ldgWk8d2sWdzXf0lwQSEhildqux9lCQlk5E6zvVlnr4pScNOBSDexrKjICDquqEltLzIVGAS6jAacLbQyaz8TXSI7rlM3kBasZvdryMyo4BCEOWuBETWQrC2VElG9OZut0yFhtpTcHb19ccq5sy1FnLY0PECQQvrPjZcr25G6ZFHj81gmJkt0nRV2m1EGXRJMZfBDcbgY4RntXDHieHHuFZWDGFSSRRL6Is3OXhiZdXnZ8HDmxuZ6',
              received: true,
            },
            {
              _id: '6813ed97d006ba3d47605393',
              name: 'Towels32661',
              amount: 807,
              price: 98281,
              manufacturer: MANUFACTURERS.Apple,
              notes:
                '7uxlWowoEj6LgelQB9IKgKJE5rdHnHko9ct6XIgx4i1D3HSdVsnOXzqTsXJ0LzyQBxcnVLpsG2xHzYskXF5c3uL1FJ4ipuZEmzLJda9asibZ6ugVHuXxnpFdAw1kGP2cHNQGFSMi55iCixNLaL2LyJhFXwa0VE5S0LCTg2Kbnn1dGHXt854uPCGrJihferE1ZL4ACsUKdt6k7y1dTAH1zydNDzc6FpVUgPo5YHamdQ8CH3ykWt1ltxw8DD',
              received: true,
            },
          ],
          delivery: {
            address: {
              country: COUNTRIES.GERMANY,
              city: 'Altendorf',
              street: 'Luebecker Strasse',
              house: 41,
              flat: 3,
            },
            finalDate: '2025-05-20T00:00:00.000Z',
            condition: DELIVERY_CONDITIONS.PICK_UP,
          },
          total_price: 407484,
          createdOn: '2025-05-15T19:25:34.000Z',
          comments: [],
          history: [
            {
              status: ORDER_STATUSES.RECEIVED,
              customer: '68263e17d006ba3d47616b96',
              products: [
                {
                  _id: '67dd3f03d006ba3d475f35ab',
                  name: 'Bacon108',
                  amount: 427,
                  price: 93970,
                  manufacturer: MANUFACTURERS.Sony,
                  notes:
                    'QCqnbre3Cn4hhuQzo4hOdup95GyPJsFZg9G0ihI0uA00bvK33GHx3avWS9S3CaFecUVQmB8QSLQiuhGe47ytqqFKJ69yUStSNMgdZkVSjZHcv8yhrBPjbjkaris4tjBVCuhIZ4Zcl9bGWd392r49P5s4zXZeFcVdvnJAwtSbS13hTsPlFW4BmHcSXRgCy7okbNHoZE5gs1IrhGwqp3xT2mXReroVSBy3lyW4qHBKXV7TMy9XjeWJ1hFml4',
                  received: true,
                },
                {
                  _id: '67da87c7d006ba3d475ef114',
                  name: 'Keyboard27505',
                  amount: 223,
                  price: 51980,
                  manufacturer: MANUFACTURERS.Samsung,
                  notes:
                    'ogxd1U3XjOpgHWSVUkQPweFYaQbdsPG3o0sY0TzKvMjiltdcZONY2U0VGUXFyb3lVcUnRczKcuFh0xmTySsyhUKqYebQvooPInBdqULPssuEXdLuj3JjiLgUgIcEk6nYsci4XjgTWw8h174SOOtS8NhqXlRHLcODk6cOEgXQiKcYrxFhlDFQ5UvqQ6MyTeZ8KgWyLmQ6dX3cn92rQrova8rqQsSxj2OlLo7S1EmyTQfzYEWvA56zDCd3sv',
                  received: true,
                },
                {
                  _id: '6813e823d006ba3d476052d3',
                  name: 'Gloves66160',
                  amount: 313,
                  price: 78052,
                  manufacturer: MANUFACTURERS.Microsoft,
                  notes:
                    'PSpO0mIPhQwx3eWFQA6Qo9YMo3Fnk5igj42WcJsxombHBu0ZoNtcb39rtSTJJC9fEn0eE6Lwtkqbovc6wq2AVgY3Mk0Ps59h3jroIPbwYLkI9B1YQ1qWkrd5uOO8MuBHHkxoY6VxG7ysSw93AjsZsVGBdXSMb0ZZlzjF6myWnkBYNiZpPmEMUKoqL0pk2qpiMbfHntGPd3c4sGBUBXvS0ugUQ6uoPykrVszbNoJGZsN0NNAp5kLd8czqPS',
                  received: true,
                },
                {
                  _id: '6813ec93d006ba3d4760534b',
                  name: 'Sausages46201',
                  amount: 415,
                  price: 85201,
                  manufacturer: MANUFACTURERS.Microsoft,
                  notes:
                    'xgwt5ldgWk8d2sWdzXf0lwQSEhildqux9lCQlk5E6zvVlnr4pScNOBSDexrKjICDquqEltLzIVGAS6jAacLbQyaz8TXSI7rlM3kBasZvdryMyo4BCEOWuBETWQrC2VElG9OZut0yFhtpTcHb19ccq5sy1FnLY0PECQQvrPjZcr25G6ZFHj81gmJkt0nRV2m1EGXRJMZfBDcbgY4RntXDHieHHuFZWDGFSSRRL6Is3OXhiZdXnZ8HDmxuZ6',
                  received: true,
                },
                {
                  _id: '6813ed97d006ba3d47605393',
                  name: 'Towels32661',
                  amount: 807,
                  price: 98281,
                  manufacturer: MANUFACTURERS.Apple,
                  notes:
                    '7uxlWowoEj6LgelQB9IKgKJE5rdHnHko9ct6XIgx4i1D3HSdVsnOXzqTsXJ0LzyQBxcnVLpsG2xHzYskXF5c3uL1FJ4ipuZEmzLJda9asibZ6ugVHuXxnpFdAw1kGP2cHNQGFSMi55iCixNLaL2LyJhFXwa0VE5S0LCTg2Kbnn1dGHXt854uPCGrJihferE1ZL4ACsUKdt6k7y1dTAH1zydNDzc6FpVUgPo5YHamdQ8CH3ykWt1ltxw8DD',
                  received: true,
                },
              ],
              total_price: 407484,
              delivery: {
                address: {
                  country: COUNTRIES.GERMANY,
                  city: 'Altendorf',
                  street: 'Luebecker Strasse',
                  house: 41,
                  flat: 3,
                },
                finalDate: '2025-05-20T00:00:00.000Z',
                condition: DELIVERY_CONDITIONS.PICK_UP,
              },
              changedOn: '2025-05-15T19:27:27.000Z',
              action: ORDER_HISTORY_ACTIONS.RECEIVED_ALL,
              performer: {
                _id: '67c4fd63735ace5b03527f81',
                username: 'test@gmail.com',
                firstName: 'Anatoly',
                lastName: 'Karpovich',
                roles: ['USER'],
                createdOn: '2025/03/03 01:52:51',
              },
            },
            {
              status: ORDER_STATUSES.PARTIALLY_RECEIVED,
              customer: '68263e17d006ba3d47616b96',
              products: [
                {
                  _id: '67dd3f03d006ba3d475f35ab',
                  name: 'Bacon108',
                  amount: 427,
                  price: 93970,
                  manufacturer: MANUFACTURERS.Sony,
                  notes:
                    'QCqnbre3Cn4hhuQzo4hOdup95GyPJsFZg9G0ihI0uA00bvK33GHx3avWS9S3CaFecUVQmB8QSLQiuhGe47ytqqFKJ69yUStSNMgdZkVSjZHcv8yhrBPjbjkaris4tjBVCuhIZ4Zcl9bGWd392r49P5s4zXZeFcVdvnJAwtSbS13hTsPlFW4BmHcSXRgCy7okbNHoZE5gs1IrhGwqp3xT2mXReroVSBy3lyW4qHBKXV7TMy9XjeWJ1hFml4',
                  received: true,
                },
                {
                  _id: '67da87c7d006ba3d475ef114',
                  name: 'Keyboard27505',
                  amount: 223,
                  price: 51980,
                  manufacturer: MANUFACTURERS.Samsung,
                  notes:
                    'ogxd1U3XjOpgHWSVUkQPweFYaQbdsPG3o0sY0TzKvMjiltdcZONY2U0VGUXFyb3lVcUnRczKcuFh0xmTySsyhUKqYebQvooPInBdqULPssuEXdLuj3JjiLgUgIcEk6nYsci4XjgTWw8h174SOOtS8NhqXlRHLcODk6cOEgXQiKcYrxFhlDFQ5UvqQ6MyTeZ8KgWyLmQ6dX3cn92rQrova8rqQsSxj2OlLo7S1EmyTQfzYEWvA56zDCd3sv',
                  received: true,
                },
                {
                  _id: '6813e823d006ba3d476052d3',
                  name: 'Gloves66160',
                  amount: 313,
                  price: 78052,
                  manufacturer: MANUFACTURERS.Microsoft,
                  notes:
                    'PSpO0mIPhQwx3eWFQA6Qo9YMo3Fnk5igj42WcJsxombHBu0ZoNtcb39rtSTJJC9fEn0eE6Lwtkqbovc6wq2AVgY3Mk0Ps59h3jroIPbwYLkI9B1YQ1qWkrd5uOO8MuBHHkxoY6VxG7ysSw93AjsZsVGBdXSMb0ZZlzjF6myWnkBYNiZpPmEMUKoqL0pk2qpiMbfHntGPd3c4sGBUBXvS0ugUQ6uoPykrVszbNoJGZsN0NNAp5kLd8czqPS',
                  received: false,
                },
                {
                  _id: '6813ec93d006ba3d4760534b',
                  name: 'Sausages46201',
                  amount: 415,
                  price: 85201,
                  manufacturer: MANUFACTURERS.Microsoft,
                  notes:
                    'xgwt5ldgWk8d2sWdzXf0lwQSEhildqux9lCQlk5E6zvVlnr4pScNOBSDexrKjICDquqEltLzIVGAS6jAacLbQyaz8TXSI7rlM3kBasZvdryMyo4BCEOWuBETWQrC2VElG9OZut0yFhtpTcHb19ccq5sy1FnLY0PECQQvrPjZcr25G6ZFHj81gmJkt0nRV2m1EGXRJMZfBDcbgY4RntXDHieHHuFZWDGFSSRRL6Is3OXhiZdXnZ8HDmxuZ6',
                  received: false,
                },
                {
                  _id: '6813ed97d006ba3d47605393',
                  name: 'Towels32661',
                  amount: 807,
                  price: 98281,
                  manufacturer: MANUFACTURERS.Apple,
                  notes:
                    '7uxlWowoEj6LgelQB9IKgKJE5rdHnHko9ct6XIgx4i1D3HSdVsnOXzqTsXJ0LzyQBxcnVLpsG2xHzYskXF5c3uL1FJ4ipuZEmzLJda9asibZ6ugVHuXxnpFdAw1kGP2cHNQGFSMi55iCixNLaL2LyJhFXwa0VE5S0LCTg2Kbnn1dGHXt854uPCGrJihferE1ZL4ACsUKdt6k7y1dTAH1zydNDzc6FpVUgPo5YHamdQ8CH3ykWt1ltxw8DD',
                  received: false,
                },
              ],
              total_price: 407484,
              delivery: {
                address: {
                  country: COUNTRIES.GERMANY,
                  city: 'Altendorf',
                  street: 'Luebecker Strasse',
                  house: 41,
                  flat: 3,
                },
                finalDate: '2025-05-20T00:00:00.000Z',
                condition: DELIVERY_CONDITIONS.PICK_UP,
              },
              changedOn: '2025-05-15T19:27:17.000Z',
              action: ORDER_HISTORY_ACTIONS.RECEIVED,
              performer: {
                _id: '67c4fd63735ace5b03527f81',
                username: 'test@gmail.com',
                firstName: 'Anatoly',
                lastName: 'Karpovich',
                roles: ['USER'],
                createdOn: '2025/03/03 01:52:51',
              },
            },
            {
              status: ORDER_STATUSES.IN_PROCESS,
              customer: '68263e17d006ba3d47616b96',
              products: [
                {
                  _id: '67dd3f03d006ba3d475f35ab',
                  name: 'Bacon108',
                  amount: 427,
                  price: 93970,
                  manufacturer: MANUFACTURERS.Sony,
                  notes:
                    'QCqnbre3Cn4hhuQzo4hOdup95GyPJsFZg9G0ihI0uA00bvK33GHx3avWS9S3CaFecUVQmB8QSLQiuhGe47ytqqFKJ69yUStSNMgdZkVSjZHcv8yhrBPjbjkaris4tjBVCuhIZ4Zcl9bGWd392r49P5s4zXZeFcVdvnJAwtSbS13hTsPlFW4BmHcSXRgCy7okbNHoZE5gs1IrhGwqp3xT2mXReroVSBy3lyW4qHBKXV7TMy9XjeWJ1hFml4',
                  received: false,
                },
                {
                  _id: '67da87c7d006ba3d475ef114',
                  name: 'Keyboard27505',
                  amount: 223,
                  price: 51980,
                  manufacturer: MANUFACTURERS.Samsung,
                  notes:
                    'ogxd1U3XjOpgHWSVUkQPweFYaQbdsPG3o0sY0TzKvMjiltdcZONY2U0VGUXFyb3lVcUnRczKcuFh0xmTySsyhUKqYebQvooPInBdqULPssuEXdLuj3JjiLgUgIcEk6nYsci4XjgTWw8h174SOOtS8NhqXlRHLcODk6cOEgXQiKcYrxFhlDFQ5UvqQ6MyTeZ8KgWyLmQ6dX3cn92rQrova8rqQsSxj2OlLo7S1EmyTQfzYEWvA56zDCd3sv',
                  received: false,
                },
                {
                  _id: '6813e823d006ba3d476052d3',
                  name: 'Gloves66160',
                  amount: 313,
                  price: 78052,
                  manufacturer: MANUFACTURERS.Microsoft,
                  notes:
                    'PSpO0mIPhQwx3eWFQA6Qo9YMo3Fnk5igj42WcJsxombHBu0ZoNtcb39rtSTJJC9fEn0eE6Lwtkqbovc6wq2AVgY3Mk0Ps59h3jroIPbwYLkI9B1YQ1qWkrd5uOO8MuBHHkxoY6VxG7ysSw93AjsZsVGBdXSMb0ZZlzjF6myWnkBYNiZpPmEMUKoqL0pk2qpiMbfHntGPd3c4sGBUBXvS0ugUQ6uoPykrVszbNoJGZsN0NNAp5kLd8czqPS',
                  received: false,
                },
                {
                  _id: '6813ec93d006ba3d4760534b',
                  name: 'Sausages46201',
                  amount: 415,
                  price: 85201,
                  manufacturer: MANUFACTURERS.Microsoft,
                  notes:
                    'xgwt5ldgWk8d2sWdzXf0lwQSEhildqux9lCQlk5E6zvVlnr4pScNOBSDexrKjICDquqEltLzIVGAS6jAacLbQyaz8TXSI7rlM3kBasZvdryMyo4BCEOWuBETWQrC2VElG9OZut0yFhtpTcHb19ccq5sy1FnLY0PECQQvrPjZcr25G6ZFHj81gmJkt0nRV2m1EGXRJMZfBDcbgY4RntXDHieHHuFZWDGFSSRRL6Is3OXhiZdXnZ8HDmxuZ6',
                  received: false,
                },
                {
                  _id: '6813ed97d006ba3d47605393',
                  name: 'Towels32661',
                  amount: 807,
                  price: 98281,
                  manufacturer: MANUFACTURERS.Apple,
                  notes:
                    '7uxlWowoEj6LgelQB9IKgKJE5rdHnHko9ct6XIgx4i1D3HSdVsnOXzqTsXJ0LzyQBxcnVLpsG2xHzYskXF5c3uL1FJ4ipuZEmzLJda9asibZ6ugVHuXxnpFdAw1kGP2cHNQGFSMi55iCixNLaL2LyJhFXwa0VE5S0LCTg2Kbnn1dGHXt854uPCGrJihferE1ZL4ACsUKdt6k7y1dTAH1zydNDzc6FpVUgPo5YHamdQ8CH3ykWt1ltxw8DD',
                  received: false,
                },
              ],
              total_price: 407484,
              delivery: {
                address: {
                  country: COUNTRIES.GERMANY,
                  city: 'Altendorf',
                  street: 'Luebecker Strasse',
                  house: 41,
                  flat: 3,
                },
                finalDate: '2025-05-20T00:00:00.000Z',
                condition: DELIVERY_CONDITIONS.PICK_UP,
              },
              changedOn: '2025-05-15T19:26:59.000Z',
              action: ORDER_HISTORY_ACTIONS.PROCESSED,
              performer: {
                _id: '67c4fd63735ace5b03527f81',
                username: 'test@gmail.com',
                firstName: 'Anatoly',
                lastName: 'Karpovich',
                roles: ['USER'],
                createdOn: '2025/03/03 01:52:51',
              },
            },
            {
              status: ORDER_STATUSES.DRAFT,
              customer: '68263e17d006ba3d47616b96',
              products: [
                {
                  _id: '67dd3f03d006ba3d475f35ab',
                  name: 'Bacon108',
                  amount: 427,
                  price: 93970,
                  manufacturer: MANUFACTURERS.Sony,
                  notes:
                    'QCqnbre3Cn4hhuQzo4hOdup95GyPJsFZg9G0ihI0uA00bvK33GHx3avWS9S3CaFecUVQmB8QSLQiuhGe47ytqqFKJ69yUStSNMgdZkVSjZHcv8yhrBPjbjkaris4tjBVCuhIZ4Zcl9bGWd392r49P5s4zXZeFcVdvnJAwtSbS13hTsPlFW4BmHcSXRgCy7okbNHoZE5gs1IrhGwqp3xT2mXReroVSBy3lyW4qHBKXV7TMy9XjeWJ1hFml4',
                  received: false,
                },
                {
                  _id: '67da87c7d006ba3d475ef114',
                  name: 'Keyboard27505',
                  amount: 223,
                  price: 51980,
                  manufacturer: MANUFACTURERS.Samsung,
                  notes:
                    'ogxd1U3XjOpgHWSVUkQPweFYaQbdsPG3o0sY0TzKvMjiltdcZONY2U0VGUXFyb3lVcUnRczKcuFh0xmTySsyhUKqYebQvooPInBdqULPssuEXdLuj3JjiLgUgIcEk6nYsci4XjgTWw8h174SOOtS8NhqXlRHLcODk6cOEgXQiKcYrxFhlDFQ5UvqQ6MyTeZ8KgWyLmQ6dX3cn92rQrova8rqQsSxj2OlLo7S1EmyTQfzYEWvA56zDCd3sv',
                  received: false,
                },
                {
                  _id: '6813e823d006ba3d476052d3',
                  name: 'Gloves66160',
                  amount: 313,
                  price: 78052,
                  manufacturer: MANUFACTURERS.Microsoft,
                  notes:
                    'PSpO0mIPhQwx3eWFQA6Qo9YMo3Fnk5igj42WcJsxombHBu0ZoNtcb39rtSTJJC9fEn0eE6Lwtkqbovc6wq2AVgY3Mk0Ps59h3jroIPbwYLkI9B1YQ1qWkrd5uOO8MuBHHkxoY6VxG7ysSw93AjsZsVGBdXSMb0ZZlzjF6myWnkBYNiZpPmEMUKoqL0pk2qpiMbfHntGPd3c4sGBUBXvS0ugUQ6uoPykrVszbNoJGZsN0NNAp5kLd8czqPS',
                  received: false,
                },
                {
                  _id: '6813ec93d006ba3d4760534b',
                  name: 'Sausages46201',
                  amount: 415,
                  price: 85201,
                  manufacturer: MANUFACTURERS.Microsoft,
                  notes:
                    'xgwt5ldgWk8d2sWdzXf0lwQSEhildqux9lCQlk5E6zvVlnr4pScNOBSDexrKjICDquqEltLzIVGAS6jAacLbQyaz8TXSI7rlM3kBasZvdryMyo4BCEOWuBETWQrC2VElG9OZut0yFhtpTcHb19ccq5sy1FnLY0PECQQvrPjZcr25G6ZFHj81gmJkt0nRV2m1EGXRJMZfBDcbgY4RntXDHieHHuFZWDGFSSRRL6Is3OXhiZdXnZ8HDmxuZ6',
                  received: false,
                },
                {
                  _id: '6813ed97d006ba3d47605393',
                  name: 'Towels32661',
                  amount: 807,
                  price: 98281,
                  manufacturer: MANUFACTURERS.Apple,
                  notes:
                    '7uxlWowoEj6LgelQB9IKgKJE5rdHnHko9ct6XIgx4i1D3HSdVsnOXzqTsXJ0LzyQBxcnVLpsG2xHzYskXF5c3uL1FJ4ipuZEmzLJda9asibZ6ugVHuXxnpFdAw1kGP2cHNQGFSMi55iCixNLaL2LyJhFXwa0VE5S0LCTg2Kbnn1dGHXt854uPCGrJihferE1ZL4ACsUKdt6k7y1dTAH1zydNDzc6FpVUgPo5YHamdQ8CH3ykWt1ltxw8DD',
                  received: false,
                },
              ],
              total_price: 407484,
              delivery: {
                address: {
                  country: COUNTRIES.GERMANY,
                  city: 'Altendorf',
                  street: 'Luebecker Strasse',
                  house: 41,
                  flat: 3,
                },
                finalDate: '2025-05-20T00:00:00.000Z',
                condition: DELIVERY_CONDITIONS.PICK_UP,
              },
              changedOn: '2025-05-15T19:26:52.000Z',
              action: ORDER_HISTORY_ACTIONS.DELIVERY_EDITED,
              performer: {
                _id: '67c4fd63735ace5b03527f81',
                username: 'test@gmail.com',
                firstName: 'Anatoly',
                lastName: 'Karpovich',
                roles: ['USER'],
                createdOn: '2025/03/03 01:52:51',
              },
            },
            {
              status: ORDER_STATUSES.DRAFT,
              customer: '68263e17d006ba3d47616b96',
              products: [
                {
                  _id: '67dd3f03d006ba3d475f35ab',
                  name: 'Bacon108',
                  amount: 427,
                  price: 93970,
                  manufacturer: MANUFACTURERS.Sony,
                  notes:
                    'QCqnbre3Cn4hhuQzo4hOdup95GyPJsFZg9G0ihI0uA00bvK33GHx3avWS9S3CaFecUVQmB8QSLQiuhGe47ytqqFKJ69yUStSNMgdZkVSjZHcv8yhrBPjbjkaris4tjBVCuhIZ4Zcl9bGWd392r49P5s4zXZeFcVdvnJAwtSbS13hTsPlFW4BmHcSXRgCy7okbNHoZE5gs1IrhGwqp3xT2mXReroVSBy3lyW4qHBKXV7TMy9XjeWJ1hFml4',
                  received: false,
                },
                {
                  _id: '67da87c7d006ba3d475ef114',
                  name: 'Keyboard27505',
                  amount: 223,
                  price: 51980,
                  manufacturer: MANUFACTURERS.Samsung,
                  notes:
                    'ogxd1U3XjOpgHWSVUkQPweFYaQbdsPG3o0sY0TzKvMjiltdcZONY2U0VGUXFyb3lVcUnRczKcuFh0xmTySsyhUKqYebQvooPInBdqULPssuEXdLuj3JjiLgUgIcEk6nYsci4XjgTWw8h174SOOtS8NhqXlRHLcODk6cOEgXQiKcYrxFhlDFQ5UvqQ6MyTeZ8KgWyLmQ6dX3cn92rQrova8rqQsSxj2OlLo7S1EmyTQfzYEWvA56zDCd3sv',
                  received: false,
                },
                {
                  _id: '6813e823d006ba3d476052d3',
                  name: 'Gloves66160',
                  amount: 313,
                  price: 78052,
                  manufacturer: MANUFACTURERS.Microsoft,
                  notes:
                    'PSpO0mIPhQwx3eWFQA6Qo9YMo3Fnk5igj42WcJsxombHBu0ZoNtcb39rtSTJJC9fEn0eE6Lwtkqbovc6wq2AVgY3Mk0Ps59h3jroIPbwYLkI9B1YQ1qWkrd5uOO8MuBHHkxoY6VxG7ysSw93AjsZsVGBdXSMb0ZZlzjF6myWnkBYNiZpPmEMUKoqL0pk2qpiMbfHntGPd3c4sGBUBXvS0ugUQ6uoPykrVszbNoJGZsN0NNAp5kLd8czqPS',
                  received: false,
                },
                {
                  _id: '6813ec93d006ba3d4760534b',
                  name: 'Sausages46201',
                  amount: 415,
                  price: 85201,
                  manufacturer: MANUFACTURERS.Microsoft,
                  notes:
                    'xgwt5ldgWk8d2sWdzXf0lwQSEhildqux9lCQlk5E6zvVlnr4pScNOBSDexrKjICDquqEltLzIVGAS6jAacLbQyaz8TXSI7rlM3kBasZvdryMyo4BCEOWuBETWQrC2VElG9OZut0yFhtpTcHb19ccq5sy1FnLY0PECQQvrPjZcr25G6ZFHj81gmJkt0nRV2m1EGXRJMZfBDcbgY4RntXDHieHHuFZWDGFSSRRL6Is3OXhiZdXnZ8HDmxuZ6',
                  received: false,
                },
                {
                  _id: '6813ed97d006ba3d47605393',
                  name: 'Towels32661',
                  amount: 807,
                  price: 98281,
                  manufacturer: MANUFACTURERS.Apple,
                  notes:
                    '7uxlWowoEj6LgelQB9IKgKJE5rdHnHko9ct6XIgx4i1D3HSdVsnOXzqTsXJ0LzyQBxcnVLpsG2xHzYskXF5c3uL1FJ4ipuZEmzLJda9asibZ6ugVHuXxnpFdAw1kGP2cHNQGFSMi55iCixNLaL2LyJhFXwa0VE5S0LCTg2Kbnn1dGHXt854uPCGrJihferE1ZL4ACsUKdt6k7y1dTAH1zydNDzc6FpVUgPo5YHamdQ8CH3ykWt1ltxw8DD',
                  received: false,
                },
              ],
              total_price: 407484,
              delivery: {
                address: {
                  country: COUNTRIES.UKRAINE,
                  city: 'City yTlOphhrTkIoMCG',
                  street: 'Street 3mZChgZzDJNyoNNNrYYeRylnhXJ1LGnPw',
                  house: 762,
                  flat: 2788,
                },
                finalDate: '2025-05-20T00:00:00.000Z',
                condition: DELIVERY_CONDITIONS.DELIVERY,
              },
              changedOn: '2025-05-15T19:26:05.000Z',
              action: ORDER_HISTORY_ACTIONS.DELIVERY_SCHEDULED,
              performer: {
                _id: '67c4fd63735ace5b03527f81',
                username: 'test@gmail.com',
                firstName: 'Anatoly',
                lastName: 'Karpovich',
                roles: ['USER'],
                createdOn: '2025/03/03 01:52:51',
              },
            },
            {
              status: ORDER_STATUSES.DRAFT,
              customer: '68263e17d006ba3d47616b96',
              products: [
                {
                  _id: '67dd3f03d006ba3d475f35ab',
                  name: 'Bacon108',
                  amount: 427,
                  price: 93970,
                  manufacturer: MANUFACTURERS.Sony,
                  notes:
                    'QCqnbre3Cn4hhuQzo4hOdup95GyPJsFZg9G0ihI0uA00bvK33GHx3avWS9S3CaFecUVQmB8QSLQiuhGe47ytqqFKJ69yUStSNMgdZkVSjZHcv8yhrBPjbjkaris4tjBVCuhIZ4Zcl9bGWd392r49P5s4zXZeFcVdvnJAwtSbS13hTsPlFW4BmHcSXRgCy7okbNHoZE5gs1IrhGwqp3xT2mXReroVSBy3lyW4qHBKXV7TMy9XjeWJ1hFml4',
                  received: false,
                },
                {
                  _id: '67da87c7d006ba3d475ef114',
                  name: 'Keyboard27505',
                  amount: 223,
                  price: 51980,
                  manufacturer: MANUFACTURERS.Samsung,
                  notes:
                    'ogxd1U3XjOpgHWSVUkQPweFYaQbdsPG3o0sY0TzKvMjiltdcZONY2U0VGUXFyb3lVcUnRczKcuFh0xmTySsyhUKqYebQvooPInBdqULPssuEXdLuj3JjiLgUgIcEk6nYsci4XjgTWw8h174SOOtS8NhqXlRHLcODk6cOEgXQiKcYrxFhlDFQ5UvqQ6MyTeZ8KgWyLmQ6dX3cn92rQrova8rqQsSxj2OlLo7S1EmyTQfzYEWvA56zDCd3sv',
                  received: false,
                },
                {
                  _id: '6813e823d006ba3d476052d3',
                  name: 'Gloves66160',
                  amount: 313,
                  price: 78052,
                  manufacturer: MANUFACTURERS.Microsoft,
                  notes:
                    'PSpO0mIPhQwx3eWFQA6Qo9YMo3Fnk5igj42WcJsxombHBu0ZoNtcb39rtSTJJC9fEn0eE6Lwtkqbovc6wq2AVgY3Mk0Ps59h3jroIPbwYLkI9B1YQ1qWkrd5uOO8MuBHHkxoY6VxG7ysSw93AjsZsVGBdXSMb0ZZlzjF6myWnkBYNiZpPmEMUKoqL0pk2qpiMbfHntGPd3c4sGBUBXvS0ugUQ6uoPykrVszbNoJGZsN0NNAp5kLd8czqPS',
                  received: false,
                },
                {
                  _id: '6813ec93d006ba3d4760534b',
                  name: 'Sausages46201',
                  amount: 415,
                  price: 85201,
                  manufacturer: MANUFACTURERS.Microsoft,
                  notes:
                    'xgwt5ldgWk8d2sWdzXf0lwQSEhildqux9lCQlk5E6zvVlnr4pScNOBSDexrKjICDquqEltLzIVGAS6jAacLbQyaz8TXSI7rlM3kBasZvdryMyo4BCEOWuBETWQrC2VElG9OZut0yFhtpTcHb19ccq5sy1FnLY0PECQQvrPjZcr25G6ZFHj81gmJkt0nRV2m1EGXRJMZfBDcbgY4RntXDHieHHuFZWDGFSSRRL6Is3OXhiZdXnZ8HDmxuZ6',
                  received: false,
                },
                {
                  _id: '6813ed97d006ba3d47605393',
                  name: 'Towels32661',
                  amount: 807,
                  price: 98281,
                  manufacturer: MANUFACTURERS.Apple,
                  notes:
                    '7uxlWowoEj6LgelQB9IKgKJE5rdHnHko9ct6XIgx4i1D3HSdVsnOXzqTsXJ0LzyQBxcnVLpsG2xHzYskXF5c3uL1FJ4ipuZEmzLJda9asibZ6ugVHuXxnpFdAw1kGP2cHNQGFSMi55iCixNLaL2LyJhFXwa0VE5S0LCTg2Kbnn1dGHXt854uPCGrJihferE1ZL4ACsUKdt6k7y1dTAH1zydNDzc6FpVUgPo5YHamdQ8CH3ykWt1ltxw8DD',
                  received: false,
                },
              ],
              total_price: 407484,
              delivery: null,
              changedOn: '2025-05-15T19:25:50.000Z',
              action: ORDER_HISTORY_ACTIONS.REQUIRED_PRODUCTS_CHANGED,
              performer: {
                _id: '67c4fd63735ace5b03527f81',
                username: 'test@gmail.com',
                firstName: 'Anatoly',
                lastName: 'Karpovich',
                roles: ['USER'],
                createdOn: '2025/03/03 01:52:51',
              },
            },
            {
              status: ORDER_STATUSES.DRAFT,
              customer: '68263e17d006ba3d47616b96',
              products: [
                {
                  _id: '67dd3f03d006ba3d475f35ab',
                  name: 'Bacon108',
                  amount: 427,
                  price: 93970,
                  manufacturer: MANUFACTURERS.Sony,
                  notes:
                    'QCqnbre3Cn4hhuQzo4hOdup95GyPJsFZg9G0ihI0uA00bvK33GHx3avWS9S3CaFecUVQmB8QSLQiuhGe47ytqqFKJ69yUStSNMgdZkVSjZHcv8yhrBPjbjkaris4tjBVCuhIZ4Zcl9bGWd392r49P5s4zXZeFcVdvnJAwtSbS13hTsPlFW4BmHcSXRgCy7okbNHoZE5gs1IrhGwqp3xT2mXReroVSBy3lyW4qHBKXV7TMy9XjeWJ1hFml4',
                  received: false,
                },
                {
                  _id: '67da87c7d006ba3d475ef114',
                  name: 'Keyboard27505',
                  amount: 223,
                  price: 51980,
                  manufacturer: MANUFACTURERS.Samsung,
                  notes:
                    'ogxd1U3XjOpgHWSVUkQPweFYaQbdsPG3o0sY0TzKvMjiltdcZONY2U0VGUXFyb3lVcUnRczKcuFh0xmTySsyhUKqYebQvooPInBdqULPssuEXdLuj3JjiLgUgIcEk6nYsci4XjgTWw8h174SOOtS8NhqXlRHLcODk6cOEgXQiKcYrxFhlDFQ5UvqQ6MyTeZ8KgWyLmQ6dX3cn92rQrova8rqQsSxj2OlLo7S1EmyTQfzYEWvA56zDCd3sv',
                  received: false,
                },
                {
                  _id: '6813e823d006ba3d476052d3',
                  name: 'Gloves66160',
                  amount: 313,
                  price: 78052,
                  manufacturer: MANUFACTURERS.Microsoft,
                  notes:
                    'PSpO0mIPhQwx3eWFQA6Qo9YMo3Fnk5igj42WcJsxombHBu0ZoNtcb39rtSTJJC9fEn0eE6Lwtkqbovc6wq2AVgY3Mk0Ps59h3jroIPbwYLkI9B1YQ1qWkrd5uOO8MuBHHkxoY6VxG7ysSw93AjsZsVGBdXSMb0ZZlzjF6myWnkBYNiZpPmEMUKoqL0pk2qpiMbfHntGPd3c4sGBUBXvS0ugUQ6uoPykrVszbNoJGZsN0NNAp5kLd8czqPS',
                  received: false,
                },
                {
                  _id: '6813ec93d006ba3d4760534b',
                  name: 'Sausages46201',
                  amount: 415,
                  price: 85201,
                  manufacturer: MANUFACTURERS.Microsoft,
                  notes:
                    'xgwt5ldgWk8d2sWdzXf0lwQSEhildqux9lCQlk5E6zvVlnr4pScNOBSDexrKjICDquqEltLzIVGAS6jAacLbQyaz8TXSI7rlM3kBasZvdryMyo4BCEOWuBETWQrC2VElG9OZut0yFhtpTcHb19ccq5sy1FnLY0PECQQvrPjZcr25G6ZFHj81gmJkt0nRV2m1EGXRJMZfBDcbgY4RntXDHieHHuFZWDGFSSRRL6Is3OXhiZdXnZ8HDmxuZ6',
                  received: false,
                },
              ],
              total_price: 309203,
              delivery: null,
              changedOn: '2025-05-15T19:25:45.000Z',
              action: ORDER_HISTORY_ACTIONS.CUSTOMER_CHANGED,
              performer: {
                _id: '67c4fd63735ace5b03527f81',
                username: 'test@gmail.com',
                firstName: 'Anatoly',
                lastName: 'Karpovich',
                roles: ['USER'],
                createdOn: '2025/03/03 01:52:51',
              },
            },
            {
              status: ORDER_STATUSES.DRAFT,
              customer: '67da8789d006ba3d475eed7c',
              products: [
                {
                  _id: '67dd3f03d006ba3d475f35ab',
                  name: 'Bacon108',
                  amount: 427,
                  price: 93970,
                  manufacturer: MANUFACTURERS.Sony,
                  notes:
                    'QCqnbre3Cn4hhuQzo4hOdup95GyPJsFZg9G0ihI0uA00bvK33GHx3avWS9S3CaFecUVQmB8QSLQiuhGe47ytqqFKJ69yUStSNMgdZkVSjZHcv8yhrBPjbjkaris4tjBVCuhIZ4Zcl9bGWd392r49P5s4zXZeFcVdvnJAwtSbS13hTsPlFW4BmHcSXRgCy7okbNHoZE5gs1IrhGwqp3xT2mXReroVSBy3lyW4qHBKXV7TMy9XjeWJ1hFml4',
                  received: false,
                },
                {
                  _id: '67da87c7d006ba3d475ef114',
                  name: 'Keyboard27505',
                  amount: 223,
                  price: 51980,
                  manufacturer: MANUFACTURERS.Samsung,
                  notes:
                    'ogxd1U3XjOpgHWSVUkQPweFYaQbdsPG3o0sY0TzKvMjiltdcZONY2U0VGUXFyb3lVcUnRczKcuFh0xmTySsyhUKqYebQvooPInBdqULPssuEXdLuj3JjiLgUgIcEk6nYsci4XjgTWw8h174SOOtS8NhqXlRHLcODk6cOEgXQiKcYrxFhlDFQ5UvqQ6MyTeZ8KgWyLmQ6dX3cn92rQrova8rqQsSxj2OlLo7S1EmyTQfzYEWvA56zDCd3sv',
                  received: false,
                },
                {
                  _id: '6813e823d006ba3d476052d3',
                  name: 'Gloves66160',
                  amount: 313,
                  price: 78052,
                  manufacturer: MANUFACTURERS.Microsoft,
                  notes:
                    'PSpO0mIPhQwx3eWFQA6Qo9YMo3Fnk5igj42WcJsxombHBu0ZoNtcb39rtSTJJC9fEn0eE6Lwtkqbovc6wq2AVgY3Mk0Ps59h3jroIPbwYLkI9B1YQ1qWkrd5uOO8MuBHHkxoY6VxG7ysSw93AjsZsVGBdXSMb0ZZlzjF6myWnkBYNiZpPmEMUKoqL0pk2qpiMbfHntGPd3c4sGBUBXvS0ugUQ6uoPykrVszbNoJGZsN0NNAp5kLd8czqPS',
                  received: false,
                },
                {
                  _id: '6813ec93d006ba3d4760534b',
                  name: 'Sausages46201',
                  amount: 415,
                  price: 85201,
                  manufacturer: MANUFACTURERS.Microsoft,
                  notes:
                    'xgwt5ldgWk8d2sWdzXf0lwQSEhildqux9lCQlk5E6zvVlnr4pScNOBSDexrKjICDquqEltLzIVGAS6jAacLbQyaz8TXSI7rlM3kBasZvdryMyo4BCEOWuBETWQrC2VElG9OZut0yFhtpTcHb19ccq5sy1FnLY0PECQQvrPjZcr25G6ZFHj81gmJkt0nRV2m1EGXRJMZfBDcbgY4RntXDHieHHuFZWDGFSSRRL6Is3OXhiZdXnZ8HDmxuZ6',
                  received: false,
                },
              ],
              total_price: 309203,
              delivery: null,
              changedOn: '2025-05-15T19:25:34.000Z',
              action: ORDER_HISTORY_ACTIONS.CREATED,
              performer: {
                _id: '67c4fd63735ace5b03527f81',
                username: 'test@gmail.com',
                firstName: 'Anatoly',
                lastName: 'Karpovich',
                roles: ['USER'],
                createdOn: '2025/03/03 01:52:51',
              },
            },
          ],
          assignedManager: {
            _id: '67c4fd63735ace5b03527f81',
            username: 'test@gmail.com',
            firstName: 'Anatoly',
            lastName: 'Karpovich',
            roles: ['USER'],
            createdOn: '2025/03/03 01:52:51',
          },
        },
        {
          _id: '67ed9a6ed006ba3d475f6345',
          status: ORDER_STATUSES.IN_PROCESS,
          customer: {
            _id: '67da8789d006ba3d475eed7c',
            email: '1742374793031Romaine.Keebler28@hotmail.com',
            name: 'ArYdNbUxEbYkMhmgWBEpReOQmZgyXwkbtoy',
            country: COUNTRIES.GREAT_BRITAIN,
            city: 'City pObKNUjAiTPtkDH',
            street: 'Street u2oqBYeHT40t4PmZQcsCcjPicx5OJc8dh',
            house: 137,
            flat: 4568,
            phone: '+81463758682',
            createdOn: '2025-03-19T08:59:53.000Z',
            notes:
              'Notes afFPIXktpgJmYDrebRDqmJMCAfYveKuDpnmsNsjGVvjpQrrWsxZmkGXEbMPLoqNTGeTKwmOCWizzbgelFiXWusXqsUBSDjEsgllBIlePrgLZFBCFujkNpeUmuugrfXghQUcILcYTcfdzpOUcSTmFYANqyHBgDPXrmXqLYMOdItNfZWkrOztNsdDIuhsZFFXSAgyjbHYPKbdjuMuzsdfRxVvDVJiLfwMRUgAgxFoCzZjckRTpCcNl',
          },
          products: [
            {
              _id: '67dd3f03d006ba3d475f35ab',
              name: 'Bacon108',
              amount: 427,
              price: 93970,
              manufacturer: MANUFACTURERS.Sony,
              notes:
                'QCqnbre3Cn4hhuQzo4hOdup95GyPJsFZg9G0ihI0uA00bvK33GHx3avWS9S3CaFecUVQmB8QSLQiuhGe47ytqqFKJ69yUStSNMgdZkVSjZHcv8yhrBPjbjkaris4tjBVCuhIZ4Zcl9bGWd392r49P5s4zXZeFcVdvnJAwtSbS13hTsPlFW4BmHcSXRgCy7okbNHoZE5gs1IrhGwqp3xT2mXReroVSBy3lyW4qHBKXV7TMy9XjeWJ1hFml4',
              received: false,
            },
          ],
          delivery: {
            address: {
              country: COUNTRIES.GREAT_BRITAIN,
              city: 'City pObKNUjAiTPtkDH',
              street: 'Street u2oqBYeHT40t4PmZQcsCcjPicx5OJc8dh',
              house: 137,
              flat: 4568,
            },
            finalDate: '2025-05-15T00:00:00.000Z',
            condition: DELIVERY_CONDITIONS.DELIVERY,
          },
          total_price: 93970,
          createdOn: '2025-04-02T20:13:34.000Z',
          comments: [],
          history: [
            {
              status: ORDER_STATUSES.IN_PROCESS,
              customer: '67da8789d006ba3d475eed7c',
              products: [
                {
                  _id: '67dd3f03d006ba3d475f35ab',
                  name: 'Bacon108',
                  amount: 427,
                  price: 93970,
                  manufacturer: MANUFACTURERS.Sony,
                  notes:
                    'QCqnbre3Cn4hhuQzo4hOdup95GyPJsFZg9G0ihI0uA00bvK33GHx3avWS9S3CaFecUVQmB8QSLQiuhGe47ytqqFKJ69yUStSNMgdZkVSjZHcv8yhrBPjbjkaris4tjBVCuhIZ4Zcl9bGWd392r49P5s4zXZeFcVdvnJAwtSbS13hTsPlFW4BmHcSXRgCy7okbNHoZE5gs1IrhGwqp3xT2mXReroVSBy3lyW4qHBKXV7TMy9XjeWJ1hFml4',
                  received: false,
                },
              ],
              total_price: 93970,
              delivery: {
                address: {
                  country: COUNTRIES.GREAT_BRITAIN,
                  city: 'City pObKNUjAiTPtkDH',
                  street: 'Street u2oqBYeHT40t4PmZQcsCcjPicx5OJc8dh',
                  house: 137,
                  flat: 4568,
                },
                finalDate: '2025-05-15T00:00:00.000Z',
                condition: DELIVERY_CONDITIONS.DELIVERY,
              },
              changedOn: '2025-05-05T20:40:37.000Z',
              action: ORDER_HISTORY_ACTIONS.PROCESSED,
              performer: {
                _id: '67c4fd63735ace5b03527f81',
                username: 'test@gmail.com',
                firstName: 'Anatoly',
                lastName: 'Karpovich',
                roles: ['USER'],
                createdOn: '2025/03/03 01:52:51',
              },
            },
            {
              status: ORDER_STATUSES.DRAFT,
              customer: '67da8789d006ba3d475eed7c',
              products: [
                {
                  _id: '67dd3f03d006ba3d475f35ab',
                  name: 'Bacon108',
                  amount: 427,
                  price: 93970,
                  manufacturer: MANUFACTURERS.Sony,
                  notes:
                    'QCqnbre3Cn4hhuQzo4hOdup95GyPJsFZg9G0ihI0uA00bvK33GHx3avWS9S3CaFecUVQmB8QSLQiuhGe47ytqqFKJ69yUStSNMgdZkVSjZHcv8yhrBPjbjkaris4tjBVCuhIZ4Zcl9bGWd392r49P5s4zXZeFcVdvnJAwtSbS13hTsPlFW4BmHcSXRgCy7okbNHoZE5gs1IrhGwqp3xT2mXReroVSBy3lyW4qHBKXV7TMy9XjeWJ1hFml4',
                  received: false,
                },
              ],
              total_price: 93970,
              delivery: {
                address: {
                  country: COUNTRIES.GREAT_BRITAIN,
                  city: 'City pObKNUjAiTPtkDH',
                  street: 'Street u2oqBYeHT40t4PmZQcsCcjPicx5OJc8dh',
                  house: 137,
                  flat: 4568,
                },
                finalDate: '2025-05-15T00:00:00.000Z',
                condition: DELIVERY_CONDITIONS.DELIVERY,
              },
              changedOn: '2025-05-05T20:40:31.000Z',
              action: ORDER_HISTORY_ACTIONS.DELIVERY_SCHEDULED,
              performer: {
                _id: '67c4fd63735ace5b03527f81',
                username: 'test@gmail.com',
                firstName: 'Anatoly',
                lastName: 'Karpovich',
                roles: ['USER'],
                createdOn: '2025/03/03 01:52:51',
              },
            },
            {
              status: ORDER_STATUSES.DRAFT,
              customer: '67da8789d006ba3d475eed7c',
              products: [
                {
                  _id: '67dd3f03d006ba3d475f35ab',
                  name: 'Bacon108',
                  amount: 427,
                  price: 93970,
                  manufacturer: MANUFACTURERS.Sony,
                  notes:
                    'QCqnbre3Cn4hhuQzo4hOdup95GyPJsFZg9G0ihI0uA00bvK33GHx3avWS9S3CaFecUVQmB8QSLQiuhGe47ytqqFKJ69yUStSNMgdZkVSjZHcv8yhrBPjbjkaris4tjBVCuhIZ4Zcl9bGWd392r49P5s4zXZeFcVdvnJAwtSbS13hTsPlFW4BmHcSXRgCy7okbNHoZE5gs1IrhGwqp3xT2mXReroVSBy3lyW4qHBKXV7TMy9XjeWJ1hFml4',
                  received: false,
                },
              ],
              total_price: 93970,
              delivery: null,
              changedOn: '2025-04-02T20:13:34.000Z',
              action: ORDER_HISTORY_ACTIONS.CREATED,
              performer: {
                _id: '67c4c707c41258c86507d85d',
                username: 'aqacourse@gmail.com',
                firstName: 'Admin',
                lastName: 'Admin',
                roles: ['ADMIN'],
                createdOn: '2025/03/02 22:00:55',
              },
            },
          ],
          assignedManager: {
            _id: '67c4c707c41258c86507d85d',
            username: 'aqacourse@gmail.com',
            firstName: 'Admin',
            lastName: 'Admin',
            roles: ['ADMIN'],
            createdOn: '2025/03/02 22:00:55',
          },
        },
      ],
      ordersCountPerDay: [
        {
          date: {
            day: 15,
            month: 5,
            year: 2025,
          },
          count: 2,
        },
      ],
    },
    customers: {
      totalNewCustomers: 256,
      topCustomers: [
        {
          _id: '68263e17d006ba3d47616b96',
          totalSpent: 407484,
          ordersCount: 1,
          customerName: 'Test oLkAAzQUjIGJGPAbrfyHRHKHOInFhYOeVcw',
          customerEmail: 'test1747336726866@gmail.com',
        },
        {
          _id: '67c487907b4bcc16671b087a',
          totalSpent: 357372,
          ordersCount: 9,
          customerName: 'Name BKSCQwsPdnlIojWIaEGcTfqNVDAfnDSrCTd',
          customerEmail: 'Abbey_Predovic@gmail.com',
        },
        {
          _id: '67da8789d006ba3d475eed7c',
          totalSpent: 286604,
          ordersCount: 2,
          customerName: 'ArYdNbUxEbYkMhmgWBEpReOQmZgyXwkbtoy',
          customerEmail: '1742374793031Romaine.Keebler28@hotmail.com',
        },
      ],
      customerGrowth: [
        {
          date: {
            year: 2025,
            month: 5,
            day: 9,
          },
          count: 0,
        },
        {
          date: {
            year: 2025,
            month: 5,
            day: 10,
          },
          count: 0,
        },
        {
          date: {
            year: 2025,
            month: 5,
            day: 11,
          },
          count: 0,
        },
        {
          date: {
            year: 2025,
            month: 5,
            day: 12,
          },
          count: 0,
        },
        {
          date: {
            year: 2025,
            month: 5,
            day: 13,
          },
          count: 0,
        },
        {
          date: {
            year: 2025,
            month: 5,
            day: 14,
          },
          count: 0,
        },
        {
          date: {
            year: 2025,
            month: 5,
            day: 15,
          },
          count: 1,
        },
        {
          date: {
            year: 2025,
            month: 5,
            day: 16,
          },
          count: 4,
        },
        {
          date: {
            year: 2025,
            month: 5,
            day: 17,
          },
          count: 28,
        },
        {
          date: {
            year: 2025,
            month: 5,
            day: 18,
          },
          count: 5,
        },
        {
          date: {
            year: 2025,
            month: 5,
            day: 19,
          },
          count: 24,
        },
        {
          date: {
            year: 2025,
            month: 5,
            day: 20,
          },
          count: 3,
        },
        {
          date: {
            year: 2025,
            month: 5,
            day: 21,
          },
          count: 26,
        },
        {
          date: {
            year: 2025,
            month: 5,
            day: 22,
          },
          count: 20,
        },
        {
          date: {
            year: 2025,
            month: 5,
            day: 23,
          },
          count: 3,
        },
      ],
    },
    products: {
      topProducts: [
        {
          name: 'Ball54972',
          sales: 10,
        },
        {
          name: 'Bacon108',
          sales: 3,
        },
        {
          name: 'Keyboard27505',
          sales: 2,
        },
        {
          name: 'Chair26526',
          sales: 1,
        },
        {
          name: 'Gloves66160',
          sales: 1,
        },
      ],
    },
  },
  ErrorMessage: null,
};

export enum MAIN_METRICS {
  OrdersThisYear = "Orders This Year",
  NewCustomers = "New Customers",
  CanceledOrders = "Canceled Orders",
  TotalRevenue = "Total Revenue",
  AvgOrderValue = "Avg Order Value",
}
