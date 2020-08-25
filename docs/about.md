About NotGovUK
==============

[NotGovUK] is an implementation of the [GOV.UK Design System] in [React]
that provides [support for writing internal applications] in addition to
public ones. (See also: [Design decisions])

> **Warning:** NotGovUK is a work in progress and should currently only
> be used in production by brave souls*.
> (* As well as those with nowhere else to turn!)

In addition to the components themselves, a full framework is provided
enabling you to:
1. quickly prototype services
2. quickly develop multiple, secure, accessible applications
3. publish and share any components or libraries your team builds
4. document your project
5. quickly set-up Continuous Integration (CI)
6. work to common standards
(See also: [Getting started])


What is NotGovUK suitable for?
------------------------------

NotGovUK is intended for:
1. public government websites served on `service.gov.uk` (when you want
   to use React instead of Nunjucks)
2. public government websites _not_ served on `service.gov.uk`
3. internal applications for civil servants
4. local councils*
5. anyone else wanting to build a highly accessible website*
6. design systems based on the [GOV.UK Design System]*
(* Some adaptation required.)


What does "support for internal applications" mean?
---------------------------------------------------

The GDS styling is only suitable for public facing applications that
are to be served under `service.gov.uk`. This is because it uses the
proprietary font, 'New Transport' which is only licensed to this
sub-domain. In addition, GDS have requested that their crown logo also
only be used in this context.

This is quite irritating for those building services within government
departments as a lot of our work is on internal applications. For these
applications we would like to take advantage of the good work that has
been done in GDS on ensuring that applications are accessible with a
good user experience. Also, as our work spans both public and internal
applications we would like to be able to share components across both
contexts wherever possible.

This is also quite irritating for local government, foreign governments,
and indeed many other organisations who may wish to provide a good,
simple, accessible user experience by building on the work done by the
UK's GDS.

The GDS layout is also very narrow, probably as an optimisation geared
towards simple, linear workflows such as filling out forms. This is
unsuitable for less linear workflows that one might find in case-working
systems or dashboards.

(UPDATE ME) NotGovUK solves these problems by allowing consumers to
provide an `internal` class on their `body` tag which will change the
font and expand the layout to use more of the screen.


Why is it called 'NotGovUK'?
----------------------------

There is a tradition in the [free software] community of describing a
replacement for X as 'What is Y? - Y is not X!' For example, the [GNU]
operating system was started as a replacement for the proprietary [Unix]
operating system with GNU being an initialism for 'GNU's not Unix'.

What is NotGovUK? Well, it's not GovUK but it's pretty damn close and
even provides extra features.

'NotGovUK' is actually just a code-name; it might change. Then again,
naming things is hard and it might not.


-- Daniel Martin, December 2019 (updated August 2020).


[NotGovUK]: https://not-govuk.netlify.app/
[GOV.UK Design System]: https://design-system.service.gov.uk/
[React]: https://reactjs.org/
[support for writing internal applications]: #what-does-support-for-internal-applications-mean
[Design decisions]: ./design-decisions
[Getting started]: ./get-started
[free software]: https://www.fsf.org/about/what-is-free-software
[GNU]: https://www.gnu.org/
[Unix]: https://en.wikipedia.org/wiki/Unix
