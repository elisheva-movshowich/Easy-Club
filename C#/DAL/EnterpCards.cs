//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DAL
{
    using System;
    using System.Collections.Generic;
    
    public partial class EnterpCards
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public EnterpCards()
        {
            this.ClubCards = new HashSet<ClubCards>();
            this.Lotery = new HashSet<Lotery>();
        }
    
        public int C_id { get; set; }
        public decimal Cost { get; set; }
        public Nullable<int> CountPoints { get; set; }
        public string Img { get; set; }
        public Nullable<int> EnterpId { get; set; }
        public Nullable<bool> Payment { get; set; }
        public string Type { get; set; }
        public Nullable<int> Duration { get; set; }
        public string FileName { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<ClubCards> ClubCards { get; set; }
        public virtual Enterprises Enterprises { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Lotery> Lotery { get; set; }
    }
}