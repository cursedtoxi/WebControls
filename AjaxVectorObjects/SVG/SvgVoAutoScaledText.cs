﻿// Copyright (c) 2018 Aurigma Inc. All rights reserved.
// Licensed under the MIT License. See LICENSE file in the project root for full license information.
//
using Aurigma.Svg;
using System.Collections.Generic;

namespace Aurigma.GraphicsMill.AjaxControls.VectorObjects.Svg
{
    public class SvgVoAutoScaledText : SvgVoText
    {
        public bool IsVertical { get; set; }

        public override IEnumerable<SvgAttribute> GetAttributes()
        {
            var baseAttributes = base.GetAttributes();
            if (baseAttributes != null)
            {
                foreach (var attr in baseAttributes)
                {
                    yield return attr;
                }
            }

            yield return new SvgAttribute("is-vertical", bool.FalseString,
                () => IsVertical.ToString(),
                v => IsVertical = SvgAttribute.ParseBooleanAttribute(v)
            );
        }
    }
}